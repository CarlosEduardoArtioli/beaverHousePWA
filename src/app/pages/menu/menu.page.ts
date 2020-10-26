import { Component, OnInit } from '@angular/core';
import { ActionSheetController, AlertController, ToastController } from '@ionic/angular';
import { User } from 'src/app/models/user.model';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {

  user: User;
  novoNome: any;
  name: any;
  photo: any;

  pages = [
    {
      title: 'Home',
      url: '/menu/home',
      icon: 'home'
    },
    {
      title: 'Editar',
      icon: 'create-outline',
      open: false,
      children: [
        {
          title: 'Dispositivo',
          url: '/menu/device-list',
          icon: 'hardware-chip'
        },
        {
          title: 'Cômodo',
          url: '/menu/room-list',
          icon: 'home'
        }
      ]
    },
    {
      title: 'Funções',
      icon: 'build',
      open: false,
      children: [
        {
          title: 'Timer',
          url: '/menu/timer-device-list',
          icon: 'alarm-outline'
        },
      ]
    },
  ];

  constructor(
    private actionSheetCtrl: ActionSheetController,
    private alertCtrl: AlertController,
    private toastController: ToastController,
    private userService: UserService,
    private authService: AuthenticationService,
  ) { }

  ngOnInit() { }

  async ionViewWillEnter() {
    await this.userName();
  }

  userName() {
    this.user = JSON.parse(localStorage.getItem('user'));

    if (this.user.displayName === null && this.user.photoURL === null) {
      localStorage.setItem('user', JSON.stringify(new User(this.user.email, this.user.email, 'assets/img/placeholder.png')));
      this.user = JSON.parse(localStorage.getItem('user'));
      this.userService.updateUserName(this.user.displayName, this.user.email);
    } else {
      this.userService.getUserName(this.user.email).valueChanges().subscribe(res => {
        this.user.displayName = res;
        localStorage.setItem('user', JSON.stringify(new User(this.user.email, this.user.displayName, this.user.photoURL)));
      });
    }
    this.user = JSON.parse(localStorage.getItem('user'));
    this.name = this.user.displayName;
    this.photo = this.user.photoURL;
  }

  async showOptions() {
    const actionSheet = await this.actionSheetCtrl.create({
      header: 'Opções',
      cssClass: 'actionSheet',
      buttons: [
        {
          text: 'Alterar Nome',
          icon: 'person',
          handler: () => {
            this.alterarNome();
          }
        },
        {
          text: 'Logout',
          icon: 'power',
          role: 'destructive',
          handler: () => {
            this.presentAlertConfirm();
          }
        }, {
          text: 'Cancelar',
          icon: 'close',
          role: 'cancel',
        }]
    });
    await actionSheet.present();
  }

  async alterarNome() {
    const alert = await this.alertCtrl.create({
      header: 'Novo Nome',
      inputs: [
        {
          name: 'new-name',
          id: 'newname',
          placeholder: 'Escreva um novo nome',
          value: this.novoNome
        },
      ],
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
        },
        {
          text: 'Salvar',
          handler: data => {
            if ((document.getElementById('newname') as HTMLInputElement).value !== '') {
              this.novoNome = (document.getElementById('newname') as HTMLInputElement).value;
              this.newname();
              this.userService.updateUserName(this.novoNome, this.user.email);
              localStorage.setItem('user', JSON.stringify(new User(this.user.email, this.novoNome, this.user.photoURL)));
              this.user = JSON.parse(localStorage.getItem('user'));
              this.name = this.user.displayName;
            }
          }
        }
      ]
    });
    await alert.present();
  }

  async newname() {
    const toast = await this.toastController.create({
      header: 'Seu nome foi alterado.',
      duration: 2000
    });
    await toast.present();
  }

  async presentAlertConfirm() {
    const alert = await this.alertCtrl.create({
      header: 'SAIR!',
      message: 'Deseja realmente sair?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel'
        }, {
          text: 'Confirmar',
          handler: () => {
            this.authService.SignOut();
          }
        }
      ]
    });
    await alert.present();
  }
}

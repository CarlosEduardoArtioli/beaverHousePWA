import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ActionSheetController, AlertController, ToastController } from '@ionic/angular';
import { RoomService } from 'src/app/services/room.service';

@Component({
  selector: 'app-room-page',
  templateUrl: './room-page.page.html',
  styleUrls: ['./room-page.page.scss'],
})
export class RoomPagePage implements OnInit {

  room: any;
  name: string;
  icon: string;
  iconName: string;
  novoNome: string;

  constructor(
    private roomService: RoomService,
    private actRoute: ActivatedRoute,
    public actionSheetController: ActionSheetController,
    private alertCtrl: AlertController,
    private toastController: ToastController,
  ) {
    this.room = this.actRoute.snapshot.paramMap.get('room');
  }

  ngOnInit() { }

  async ionViewWillEnter() {
    await this.getRoom();
  }

  getRoom() {
    this.roomService.getRoom(this.room).valueChanges().subscribe(res => {
      this.name = res.name;
      this.icon = res.icon;
      this.iconName = res.iconName;
    });
  }

  async updateName() {
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
              this.roomService.updateName(this.novoNome, this.room);
            }
          }
        }
      ]
    });
    await alert.present();
  }

  async newname() {
    const toast = await this.toastController.create({
      header: 'O nome foi alterado.',
      duration: 2000
    });
    await toast.present();
  }
}

import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ActionSheetController, AlertController, ToastController } from '@ionic/angular';
import { DeviceService } from 'src/app/services/device.service';

@Component({
  selector: 'app-device-page',
  templateUrl: './device-page.page.html',
  styleUrls: ['./device-page.page.scss'],
})
export class DevicePagePage implements OnInit {

  mac: any;
  novoNome = '';
  device = {
    ap: '',
    icon: {
      icon: '',
      iconName: '',
    },
    mac: '',
    name: '',
    room: {
      icon: '',
      name: '',
    }
  };

  constructor(
    private deviceService: DeviceService,
    private actRoute: ActivatedRoute,
    public fb: FormBuilder,
    public actionSheetController: ActionSheetController,
    private alertCtrl: AlertController,
    private toastController: ToastController,
  ) {
    this.mac = this.actRoute.snapshot.paramMap.get('mac');
  }

  ngOnInit() { }

  async ionViewWillEnter() {
    await this.getDevice();
  }

  getDevice() {
    this.deviceService.getDevice(this.mac).valueChanges().subscribe(res => {
      this.device = res;
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
              this.deviceService.updateName(this.novoNome, this.mac);
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

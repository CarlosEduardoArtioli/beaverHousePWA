import { Component, OnInit } from '@angular/core';
import { AlertController, ToastController } from '@ionic/angular';
import { Room } from 'src/app/models/room.model';
import { RoomService } from 'src/app/services/room.service';

@Component({
  selector: 'app-room-list',
  templateUrl: './room-list.page.html',
  styleUrls: ['./room-list.page.scss'],
})
export class RoomListPage implements OnInit {

  Rooms = [];
  newRoom: any;

  constructor(
    private roomService: RoomService,
    private alertCtrl: AlertController,
    private toastController: ToastController,
  ) { }

  ngOnInit() { }

  async ionViewWillEnter() {
    await this.getRooms();
  }

  getRooms() {
    const roomRes = this.roomService.getRoomList();
    roomRes.snapshotChanges().subscribe(res => {
      this.Rooms = [];
      res.forEach(item => {
        const a = item.payload.toJSON();
        a['$key'] = item.key;
        this.Rooms.push(a as Room);
      });
    });
  }

  async addRoom() {
    const alert = await this.alertCtrl.create({
      header: 'Novo Cômodo',
      inputs: [
        {
          name: 'new-room',
          id: 'newroom',
          placeholder: 'Escreva o nome do Cômodo',
          value: this.newRoom
        },
      ],
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: data => {
          }
        },
        {
          text: 'Salvar',
          handler: data => {
            if ((document.getElementById('newroom') as HTMLInputElement).value !== '') {
              this.newRoom = (document.getElementById('newroom') as HTMLInputElement).value;
              this.newroom();
              this.roomService.createRoom(this.newRoom, '/assets/svg/casa.svg', 'Casa');
            }
          }
        }
      ]
    });
    await alert.present();
  }

  async newroom() {
    const toast = await this.toastController.create({
      header: 'Cômodo Adicionado!',
      duration: 2000
    });
    await toast.present();
  }

  deleteRoom(room: any) {
    this.presentAlertConfirm(room);
  }

  async presentAlertConfirm(room) {
    const alert = await this.alertCtrl.create({
      header: 'EXCLUIR!',
      message: 'Deseja excluir o cômodo?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel'
        }, {
          text: 'Confirmar',
          handler: () => {
            this.roomService.deleteRoom(room);
          }
        }
      ]
    });
    await alert.present();
  }
}

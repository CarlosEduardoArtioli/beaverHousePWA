import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { Room } from 'src/app/models/room.model';
import { DeviceService } from 'src/app/services/device.service';
import { RoomService } from 'src/app/services/room.service';

@Component({
  selector: 'app-device-room',
  templateUrl: './device-room.page.html',
  styleUrls: ['./device-room.page.scss'],
})
export class DeviceRoomPage implements OnInit {

  mac: any;
  Rooms = [];

  constructor(
    private deviceService: DeviceService,
    private router: Router,
    private actRoute: ActivatedRoute,
    private roomService: RoomService,
    private toastController: ToastController,
  ) {
    this.mac = this.actRoute.snapshot.paramMap.get('mac');
  }

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

  update(room, IconRoom) {
    this.deviceService.updateRoom(room, IconRoom, this.mac)
      .then(() => {
        this.router.navigate(['device-page/', this.mac]);
        this.changeRoom();
      })
      .catch(error => console.log(error));
  }

  async changeRoom() {
    const toast = await this.toastController.create({
      header: 'O cômodo foi alterado.',
      duration: 2000
    });
    await toast.present();
  }
}

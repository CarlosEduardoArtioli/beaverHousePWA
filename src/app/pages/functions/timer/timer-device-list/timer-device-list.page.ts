import { Component, OnInit } from '@angular/core';
import { Dispositivo } from 'src/app/models/device.model';
import { Room } from 'src/app/models/room.model';
import { DeviceService } from 'src/app/services/device.service';
import { RoomService } from 'src/app/services/room.service';

@Component({
  selector: 'app-timer-device-list',
  templateUrl: './timer-device-list.page.html',
  styleUrls: ['./timer-device-list.page.scss'],
})
export class TimerDeviceListPage implements OnInit {

  Devices = [];
  Rooms = [];
  selectTabs = 'all';

  constructor(
    private deviceService: DeviceService,
    private roomService: RoomService
  ) { }

  ngOnInit() {
  }

  async ionViewWillEnter() {
    await this.getDevices();
    await this.getRooms();
  }

  getDevices() {
    const deviceRes = this.deviceService.getDeviceList();
    deviceRes.snapshotChanges().subscribe(res => {
      this.Devices = [];
      res.forEach(item => {
        const a = item.payload.toJSON();
        a['$key'] = item.key;
        this.Devices.push(a as Dispositivo);
      });
    });
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
}

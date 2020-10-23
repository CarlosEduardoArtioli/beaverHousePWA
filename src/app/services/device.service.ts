import { Injectable } from '@angular/core';
import { AngularFireList, AngularFireObject, AngularFireDatabase } from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class DeviceService {

  deviceListRef: AngularFireList<any>;
  deviceRef: AngularFireObject<any>;
  status: string;
  user: any;
  email: string;

  constructor(
    private db: AngularFireDatabase,
  ) {
    this.userEmail();
  }

  userEmail() {
    this.user = JSON.parse(localStorage.getItem('user'));
    this.user.email = this.user.email.replace(/[.#$@]+/g, '');
  }

  getDevice(mac: any) {
    this.deviceRef = this.db.object(`/users/${this.user.email}/devices/${mac}`);
    return this.deviceRef;
  }

  getDeviceList() {
    this.deviceListRef = this.db.list(`/users/${this.user.email}/devices`);
    return this.deviceListRef;
  }

  updateIcon(icone, nomeIcone, mac) {
    this.db.database.ref(`/users/${this.user.email}/devices/${mac}/icon/iconName`).set(nomeIcone);
    return this.db.database.ref(`/users/${this.user.email}/devices/${mac}/icon/icon`).set(icone);
  }

  updateName(nome, mac) {
    return this.db.database.ref(`/users/${this.user.email}/devices/${mac}/name`).set(nome);
  }

  updateRoom(room, iconRoom, mac) {
    this.db.database.ref(`/users/${this.user.email}/devices/${mac}/room/name`).set(room);
    return this.db.database.ref(`/users/${this.user.email}/devices/${mac}/room/icon`).set(iconRoom);
  }

  deleteDevice(mac: any) {
    this.deviceRef = this.db.object(`/users/${this.user.email}/devices/${mac}`);
    this.deviceRef.remove();
  }

  mudaStatus(mac: any) {
    this.db.database.ref(`/users/${this.user.email}/devices/${mac}/status`).once('value').then(snapshot => {
      if ((snapshot.val()) === 'ligado') {
        this.db.database.ref(`/users/${this.user.email}/devices/${mac}/status`).set('desligado');
      } else {
        this.db.database.ref(`/users/${this.user.email}/devices/${mac}/status`).set('ligado');
      }
    });
  }
}

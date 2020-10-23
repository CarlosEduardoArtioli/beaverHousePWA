import { Injectable } from '@angular/core';
import { AngularFireList, AngularFireObject, AngularFireDatabase } from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class RoomService {

  roomListRef: AngularFireList<any>;
  roomRef: AngularFireObject<any>;
  user: any;
  email: string;

  constructor(
    private db: AngularFireDatabase
  ) {
    this.user = JSON.parse(localStorage.getItem('user'));
    this.user.email = this.user.email.replace(/[.#$@]+/g, '');
  }

  createRoom(room: any, icone, iconName) {
    this.db.object(`/users/${this.user.email}/rooms/${room}`).set({
      name: room,
      icon: icone,
      iconName: iconName
    });
  }

  getRoom(room: any) {
    this.roomRef = this.db.object(`/users/${this.user.email}/rooms/${room}`);
    return this.roomRef;
  }

  getRoomList() {
    this.roomListRef = this.db.list(`/users/${this.user.email}/rooms`);
    return this.roomListRef;
  }

  updateName(nome, comodo) {
    this.db.object(`/users/${this.user.email}/rooms/${comodo}/name`).set(nome);
  }

  updateIcon(icone, iconName, comodo) {
    this.db.object(`/users/${this.user.email}/rooms/${comodo}/iconName`).set(iconName);
    return this.db.object(`/users/${this.user.email}/rooms/${comodo}/icon`).set(icone);
  }

  deleteRoom(room: any) {
    this.roomRef = this.db.object(`/users/${this.user.email}/rooms/${room}`);
    this.roomRef.remove();
  }
}

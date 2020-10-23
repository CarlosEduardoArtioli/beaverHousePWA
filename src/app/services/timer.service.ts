import { Injectable } from '@angular/core';
import { AngularFireList, AngularFireObject, AngularFireDatabase } from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class TimerService {

  timerListRef: AngularFireList<any>;
  timerRef: AngularFireObject<any>;
  user: any;

  constructor(
    private db: AngularFireDatabase
  ) {
    this.user = JSON.parse(localStorage.getItem('user'));
    this.user.email = this.user.email.replace(/[.#$@]+/g, '');
  }

  getTimerList(mac) {
    this.timerListRef = this.db.list(`/users/${this.user.email}/devices/${mac}/timer`);
    return this.timerListRef;
  }

  getTimer(timer, mac) {
    this.timerRef = this.db.object(`/users/${this.user.email}/devices/${mac}/timer/${timer}`);
    return this.timerRef;
  }

  getTimerNumber(mac) {
    this.timerRef = this.db.object(`/users/${this.user.email}/devices/${mac}/timernumber`);
    return this.timerRef;
  }

  addTimerNumber(mac, timernumber: number) {
    this.db.object(`/users/${this.user.email}/devices/${mac}/timernumber`).set(timernumber);
  }

  addTimer(action, dateTime, week1, week2, week3, week4, week5, week6, week7, mac, timernumber) {
    this.timerRef = this.db.object(`/users/${this.user.email}/devices/${mac}/timer/timer${timernumber}`);
    return this.timerRef.set({
      action: action,
      timer: dateTime,
      week1: week1,
      week2: week2,
      week3: week3,
      week4: week4,
      week5: week5,
      week6: week6,
      week7: week7
    });
  }

  updateTimer(action, dateTime, week1, week2, week3, week4, week5, week6, week7, mac, timer) {
    this.timerRef = this.db.object(`/users/${this.user.email}/devices/${mac}/timer/${timer}`);
    return this.timerRef.update({
      action: action,
      timer: dateTime,
      week1: week1,
      week2: week2,
      week3: week3,
      week4: week4,
      week5: week5,
      week6: week6,
      week7: week7
    });
  }

  deleteTimer(mac: any, timer: any) {
    this.timerRef = this.db.object(`/users/${this.user.email}/devices/${mac}/timer/${timer}`);
    this.timerRef.remove();
  }
}

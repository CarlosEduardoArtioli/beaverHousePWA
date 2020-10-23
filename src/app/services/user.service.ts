import { AngularFireDatabase } from '@angular/fire/database';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  name: any;

  constructor(
    private db: AngularFireDatabase
  ) { }

  getUserName(email) {
    email = email.replace(/[.#$@]+/g, '');
    this.name = this.db.object(`/users/${email}/settings/displayName`);
    return this.name;
  }

  updateUserName(name, email) {
    email = email.replace(/[.#$@]+/g, '');
    this.db.database.ref(`/users/${email}/settings/displayName`).set(name);
  }
}

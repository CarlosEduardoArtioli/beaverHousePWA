import { Injectable, NgZone } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireDatabase } from '@angular/fire/database';
import { Router } from '@angular/router';
import { auth } from 'firebase';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})

export class AuthenticationService {

  userData: any;

  constructor(
    public ngFireAuth: AngularFireAuth,
    public router: Router,
    public ngZone: NgZone,
    private db: AngularFireDatabase
  ) {
    this.ngFireAuth.authState.subscribe(user => {
      if (user) {
        this.userData = user;
        localStorage.setItem('user', JSON.stringify(this.userData));
        JSON.parse(localStorage.getItem('user'));
      } else {
        localStorage.setItem('user', null);
        JSON.parse(localStorage.getItem('user'));
      }
    });
  }

  SignIn(value) {
    return this.ngFireAuth.auth.signInWithEmailAndPassword(value.email, value.password);
  }

  registerUser(value) {
    return new Promise<any>((resolve, reject) => {

      this.ngFireAuth.auth.createUserWithEmailAndPassword(value.email, value.password)
        .then(
          res => resolve(res),
          err => reject(err));
      this.SetUserEmail();
    });
  }

  SendVerificationMail() {
    return this.ngFireAuth.auth.currentUser.sendEmailVerification()
      .then(() => {
        this.router.navigate(['verify-email']);
      });
  }

  PasswordRecover(passwordResetEmail) {
    return this.ngFireAuth.auth.sendPasswordResetEmail(passwordResetEmail)
      .then(() => {
        window.alert('Email de recuperação de senha enviado, por favor verifique seu email!');
      }).catch((error) => {
        console.log(error);
      });
  }

  get isLoggedIn(): boolean {
    const user = JSON.parse(localStorage.getItem('user'));
    return (user !== null && user.emailVerified !== false) ? true : false;
  }

  get isEmailVerified(): boolean {
    const user = JSON.parse(localStorage.getItem('user'));
    return (user.emailVerified !== false) ? true : false;
  }

  GoogleAuth() {
    return this.AuthLogin(new auth.GoogleAuthProvider());
  }

  AuthLogin(provider) {
    return this.ngFireAuth.auth.signInWithPopup(provider)
      .then((result) => {
        this.ngZone.run(() => {
          this.SetUserData(result.user);
          const delay = 500;
          setTimeout(() => {
            this.router.navigate(['/home/login']);
          }, delay);
        });
      }).catch((error) => {
        console.log(error);
      });
  }

  SetUserData(user) {
    const userData: User = {
      email: user.email,
      displayName: user.displayName,
      photoURL: user.photoURL
    };
    const delay = 1000;
    setTimeout(() => {
      const userLocal = JSON.parse(localStorage.getItem('user'));
      userLocal.email = userLocal.email.replace(/[.#$@]+/g, '');
      this.db.object(`/users/${userLocal.email}/settings`).set(userData);
    }, delay);
  }

  SetUserEmail() {
    const delay = 2000;
    setTimeout(() => {
      const userLocal = JSON.parse(localStorage.getItem('user'));
      const userData: User = {
        email: userLocal.email,
        displayName: userLocal.displayName,
        photoURL: userLocal.photoURL
      };
      userLocal.email = userLocal.email.replace(/[.#$@]+/g, '');
      this.db.object(`/users/${userLocal.email}/settings`).set(userData);
    }, delay);
  }

  SignOut() {
    return this.ngFireAuth.auth.signOut().then(() => {
      localStorage.removeItem('user');
      this.router.navigate(['login']);
    });
  }

  getAuth() {
    return this.ngFireAuth.auth;
  }

  emailVerified() {
    this.ngFireAuth.authState.subscribe(user => {
      if (user) {
        this.userData = user;
        localStorage.setItem('user', JSON.stringify(this.userData));
        JSON.parse(localStorage.getItem('user'));
      } else {
        localStorage.setItem('user', null);
        JSON.parse(localStorage.getItem('user'));
      }
    });
  }
}

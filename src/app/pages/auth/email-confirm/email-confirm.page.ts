import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-email-confirm',
  templateUrl: './email-confirm.page.html',
  styleUrls: ['./email-confirm.page.scss'],
})
export class EmailConfirmPage implements OnInit {

  constructor(
    private navCtrl: NavController,
    private fbAuth: AngularFireAuth,
  ) { }

  ngOnInit() { }

  async goToLogin() {
    this.navCtrl.navigateForward('login');
  }

  verificationMail() {
    this.fbAuth.auth.currentUser.sendEmailVerification();
  }
}

import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoadingController, NavController, ToastController } from '@ionic/angular';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  validationsForm: FormGroup;

  validationMessages = {
    email: [
      { type: 'required', message: 'Insira um email.' },
      { type: 'pattern', message: 'Insira um email valido.' }
    ],
    password: [
      { type: 'required', message: 'Insira a senha.' },
      { type: 'minlength', message: 'A senha deve ter mais de 5 caracteres.' }
    ]
  };

  constructor(
    private loadingCtrl: LoadingController,
    private navCtrl: NavController,
    private toastCtrl: ToastController,
    private authService: AuthenticationService,
    public router: Router,
    private formBuilder: FormBuilder
  ) {
    this.validationsForm = this.formBuilder.group({
      email: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
      ])),
      password: new FormControl('', Validators.compose([
        Validators.minLength(5),
        Validators.required
      ])),
    });
  }

  ngOnInit() { }

  async ionViewWillEnter() {
    await this.verificaUser();
    await this.authService.emailVerified();
  }

  private async verificaUser() {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user !== null && user.emailVerified === true) {
      const loading = await this.loadingCtrl.create({ message: 'Autenticando...' });
      loading.present();
      this.navCtrl.navigateRoot('menu/home');
      loading.dismiss();
    }
  }

  async googleAuth() {
    await this.authService.GoogleAuth();
  }

  async goToSignup() {
    this.navCtrl.navigateForward('signup');
  }

  async logIn(value) {
    await this.authService.emailVerified();
    await this.authService.SignIn(value)
      .then((res) => {
        if (this.authService.isEmailVerified) {
          this.router.navigate(['menu/home']);
        } else {
          this.showMessage('Email não verificado');
          return false;
        }
      }).catch((error) => {
        this.showMessage(error.message);
      });
  }

  async showMessage(message: string) {
    await this.toastCtrl.create({ message: message, duration: 3000 })
      .then((toastData) => {
        toastData.present();
      });
  }
}

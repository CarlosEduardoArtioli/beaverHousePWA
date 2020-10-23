import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NavController, ToastController } from '@ionic/angular';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {

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
    private navCtrl: NavController,
    private toastCtrl: ToastController,
    public authService: AuthenticationService,
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

  async cancel() {
    this.navCtrl.navigateBack('login');
  }

  async signUp(value) {
    await this.authService.registerUser(value)
      .then((res) => {
        this.authService.SendVerificationMail();
        this.router.navigate(['verify-email']);
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

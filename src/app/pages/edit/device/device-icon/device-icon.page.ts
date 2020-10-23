import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { DeviceService } from 'src/app/services/device.service';

@Component({
  selector: 'app-device-icon',
  templateUrl: './device-icon.page.html',
  styleUrls: ['./device-icon.page.scss'],
})
export class DeviceIconPage implements OnInit {

  mac: string;

  constructor(
    private deviceService: DeviceService,
    private router: Router,
    private actRoute: ActivatedRoute,
    private toastController: ToastController,
  ) {
    this.mac = this.actRoute.snapshot.paramMap.get('mac');
  }

  ngOnInit() { }

  update(icone, nomeIcone) {
    this.deviceService.updateIcon(icone, nomeIcone, this.mac)
      .then(() => {
        this.router.navigate(['device-page/', this.mac]);
        this.changeIcon();
      })
      .catch(error => console.log(error));
  }

  async changeIcon() {
    const toast = await this.toastController.create({
      header: 'O icone foi alterado.',
      duration: 2000
    });
    await toast.present();
  }
}

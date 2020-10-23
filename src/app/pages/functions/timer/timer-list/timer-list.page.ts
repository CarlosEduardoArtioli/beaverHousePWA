import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Timer } from 'src/app/models/timer.model';
import { TimerService } from 'src/app/services/timer.service';

@Component({
  selector: 'app-timer-list',
  templateUrl: './timer-list.page.html',
  styleUrls: ['./timer-list.page.scss'],
})
export class TimerListPage implements OnInit {

  Timers = [];
  mac: string;

  constructor(
    private timerService: TimerService,
    private alertCtrl: AlertController,
    private router: Router,
    private actRoute: ActivatedRoute,
  ) {
    this.mac = this.actRoute.snapshot.paramMap.get('mac');
  }

  ngOnInit() { }

  async ionViewWillEnter() {
    await this.getTimers();
  }

  getTimers() {
    const timerRes = this.timerService.getTimerList(this.mac);
    timerRes.snapshotChanges().subscribe(res => {
      this.Timers = [];
      res.forEach(item => {
        const a = item.payload.toJSON();
        a['$key'] = item.key;
        this.Timers.push(a as Timer);
      });
    });
  }

  deleteTimer(mac: any, timer: any) {
    this.presentAlertConfirm(mac, timer);
  }

  addTimer() {
    this.router.navigate(['timer-add/', this.mac]);
  }

  async presentAlertConfirm(mac, timer) {
    const alert = await this.alertCtrl.create({
      header: 'EXCLUIR!',
      message: 'Deseja excluir o timer?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel'
        }, {
          text: 'Confirmar',
          handler: () => {
            this.timerService.deleteTimer(mac, timer);
          }
        }
      ]
    });
    await alert.present();
  }
}

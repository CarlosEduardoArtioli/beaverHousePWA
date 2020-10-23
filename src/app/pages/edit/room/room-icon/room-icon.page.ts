import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { RoomService } from 'src/app/services/room.service';

@Component({
  selector: 'app-room-icon',
  templateUrl: './room-icon.page.html',
  styleUrls: ['./room-icon.page.scss'],
})
export class RoomIconPage implements OnInit {

  room: any;

  constructor(
    private roomService: RoomService,
    private router: Router,
    private actRoute: ActivatedRoute,
    private toastController: ToastController,
  ) {
    this.room = this.actRoute.snapshot.paramMap.get('room');
  }

  ngOnInit() { }

  update(icone, iconName) {
    this.roomService.updateIcon(icone, iconName, this.room)
      .then(() => {
        this.router.navigate(['room-page/', this.room]);
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

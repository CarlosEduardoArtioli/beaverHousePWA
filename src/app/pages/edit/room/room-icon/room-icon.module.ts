import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RoomIconPageRoutingModule } from './room-icon-routing.module';

import { RoomIconPage } from './room-icon.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RoomIconPageRoutingModule
  ],
  declarations: [RoomIconPage]
})
export class RoomIconPageModule {}

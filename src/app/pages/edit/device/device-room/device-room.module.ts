import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DeviceRoomPageRoutingModule } from './device-room-routing.module';

import { DeviceRoomPage } from './device-room.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DeviceRoomPageRoutingModule
  ],
  declarations: [DeviceRoomPage]
})
export class DeviceRoomPageModule {}

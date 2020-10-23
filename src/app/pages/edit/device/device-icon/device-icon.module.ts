import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DeviceIconPageRoutingModule } from './device-icon-routing.module';

import { DeviceIconPage } from './device-icon.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DeviceIconPageRoutingModule
  ],
  declarations: [DeviceIconPage]
})
export class DeviceIconPageModule {}

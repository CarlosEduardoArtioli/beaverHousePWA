import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TimerDeviceListPageRoutingModule } from './timer-device-list-routing.module';

import { TimerDeviceListPage } from './timer-device-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TimerDeviceListPageRoutingModule
  ],
  declarations: [TimerDeviceListPage]
})
export class TimerDeviceListPageModule {}

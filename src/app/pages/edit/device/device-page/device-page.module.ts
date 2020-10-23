import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DevicePagePageRoutingModule } from './device-page-routing.module';

import { DevicePagePage } from './device-page.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule, ReactiveFormsModule,
    IonicModule,
    DevicePagePageRoutingModule
  ],
  declarations: [DevicePagePage]
})
export class DevicePagePageModule {}

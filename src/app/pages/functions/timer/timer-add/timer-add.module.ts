import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TimerAddPageRoutingModule } from './timer-add-routing.module';

import { TimerAddPage } from './timer-add.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule, ReactiveFormsModule,
    IonicModule,
    TimerAddPageRoutingModule
  ],
  declarations: [TimerAddPage]
})
export class TimerAddPageModule {}

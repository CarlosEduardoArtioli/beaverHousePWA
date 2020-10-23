import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TimerEditPageRoutingModule } from './timer-edit-routing.module';

import { TimerEditPage } from './timer-edit.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule, ReactiveFormsModule,
    IonicModule,
    TimerEditPageRoutingModule
  ],
  declarations: [TimerEditPage]
})
export class TimerEditPageModule {}

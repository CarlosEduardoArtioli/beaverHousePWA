import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TimerListPageRoutingModule } from './timer-list-routing.module';

import { TimerListPage } from './timer-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TimerListPageRoutingModule
  ],
  declarations: [TimerListPage]
})
export class TimerListPageModule {}

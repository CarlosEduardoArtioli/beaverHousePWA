import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TimerAddPage } from './timer-add.page';

const routes: Routes = [
  {
    path: '',
    component: TimerAddPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TimerAddPageRoutingModule {}

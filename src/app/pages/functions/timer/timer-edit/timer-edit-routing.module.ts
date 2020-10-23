import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TimerEditPage } from './timer-edit.page';

const routes: Routes = [
  {
    path: '',
    component: TimerEditPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TimerEditPageRoutingModule {}

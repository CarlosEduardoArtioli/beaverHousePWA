import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TimerListPage } from './timer-list.page';

const routes: Routes = [
  {
    path: '',
    component: TimerListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TimerListPageRoutingModule {}

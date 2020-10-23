import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TimerDeviceListPage } from './timer-device-list.page';

const routes: Routes = [
  {
    path: '',
    component: TimerDeviceListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TimerDeviceListPageRoutingModule {}

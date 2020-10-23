import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DevicePagePage } from './device-page.page';

const routes: Routes = [
  {
    path: '',
    component: DevicePagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DevicePagePageRoutingModule {}

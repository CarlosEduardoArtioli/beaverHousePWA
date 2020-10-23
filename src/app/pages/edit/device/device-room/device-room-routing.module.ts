import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DeviceRoomPage } from './device-room.page';

const routes: Routes = [
  {
    path: '',
    component: DeviceRoomPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DeviceRoomPageRoutingModule {}

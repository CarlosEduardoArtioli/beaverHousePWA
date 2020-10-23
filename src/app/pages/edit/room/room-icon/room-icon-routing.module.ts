import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RoomIconPage } from './room-icon.page';

const routes: Routes = [
  {
    path: '',
    component: RoomIconPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RoomIconPageRoutingModule {}

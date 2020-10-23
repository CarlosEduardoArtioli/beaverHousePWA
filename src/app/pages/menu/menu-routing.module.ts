import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from 'src/app/guards/auth.guard';

import { MenuPage } from './menu.page';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'menu/home',
    pathMatch: 'full'
  },
  {
    path: '',
    component: MenuPage,
    children: [
      {
        path: 'home',
        loadChildren: () => import('../home/home.module').then(m => m.HomePageModule),
        canActivate: [AuthGuard]
      },
      {
        path: 'room-list',
        loadChildren: () => import('../edit/room/room-list/room-list.module').then(m => m.RoomListPageModule),
        canActivate: [AuthGuard]
      },
      {
        path: 'device-list',
        loadChildren: () => import('../edit/device/device-list/device-list.module').then(m => m.DeviceListPageModule),
        canActivate: [AuthGuard]
      },
      {
        path: 'timer-device-list',
        loadChildren: () => import('../functions/timer/timer-device-list/timer-device-list.module').then( m => m.TimerDeviceListPageModule),
        canActivate: [AuthGuard]
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MenuPageRoutingModule {}

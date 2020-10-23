import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/auth/login/login.module').then(m => m.LoginPageModule)
  },
  {
    path: 'signup',
    loadChildren: () => import('./pages/auth/signup/signup.module').then(m => m.SignupPageModule)
  },
  {
    path: 'email-confirm',
    loadChildren: () => import('./pages/auth/email-confirm/email-confirm.module').then(m => m.EmailConfirmPageModule)
  },
  {
    path: 'device-list',
    loadChildren: () => import('./pages/edit/device/device-list/device-list.module').then(m => m.DeviceListPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'device-page/:mac',
    loadChildren: () => import('./pages/edit/device/device-page/device-page.module').then(m => m.DevicePagePageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'device-icon/:mac',
    loadChildren: () => import('./pages/edit/device/device-icon/device-icon.module').then(m => m.DeviceIconPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'device-room/:mac',
    loadChildren: () => import('./pages/edit/device/device-room/device-room.module').then(m => m.DeviceRoomPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'room-page/:room',
    loadChildren: () => import('./pages/edit/room/room-page/room-page.module').then(m => m.RoomPagePageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'room-icon/:room',
    loadChildren: () => import('./pages/edit/room/room-icon/room-icon.module').then(m => m.RoomIconPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'timer-add/:mac',
    loadChildren: () => import('./pages/functions/timer/timer-add/timer-add.module').then(m => m.TimerAddPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'timer-list/:mac',
    loadChildren: () => import('./pages/functions/timer/timer-list/timer-list.module').then(m => m.TimerListPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'timer-edit/:mac/:timer',
    loadChildren: () => import('./pages/functions/timer/timer-edit/timer-edit.module').then(m => m.TimerEditPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'menu',
    loadChildren: () => import('./pages/menu/menu.module').then(m => m.MenuPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: '**',
    redirectTo: 'menu/home',
    canActivate: [AuthGuard]
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

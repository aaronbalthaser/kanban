import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Preloader } from './app.preloader';

const ROUTES: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'auth' },
  {
    path: 'dashboard',
    loadChildren: './modules/dashboard#DashboardModule',
    data: { preload: true }
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(ROUTES, { preloadingStrategy: Preloader })],
  exports: [
    RouterModule
  ],
  providers: [
    Preloader
  ]
})

export class RoutingModule {}

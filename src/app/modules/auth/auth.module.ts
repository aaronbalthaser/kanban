import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

/* Third Party Module Dependencies */
import { AngularFireModule, FirebaseAppConfig } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';

/* Module Dependencies */
import { SharedModule } from './modules/shared';

export const firebaseConfig: FirebaseAppConfig = {
  apiKey: "AIzaSyAnwb1cNEy_vstYnKdimaVTSeS033RtKrc",
  authDomain: "kanban-3cec3.firebaseapp.com",
  databaseURL: "https://kanban-3cec3.firebaseio.com",
  projectId: "kanban-3cec3",
  storageBucket: "kanban-3cec3.appspot.com",
  messagingSenderId: "1064715522547"
};

export const ROUTES: Routes = [
  {
    path: 'auth',
    children: [
      { path: '', pathMatch: 'full', redirectTo: 'login' },
      { path: 'login', loadChildren: './modules/login/login.module#LoginModule' },
      {
        path: 'register',
        loadChildren: './modules/register/register.module#RegisterModule',
        data: { preload: true }
      }
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES),

    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule,
    AngularFireDatabaseModule,

    SharedModule.forRoot()
  ]
})

export class AuthModule {}

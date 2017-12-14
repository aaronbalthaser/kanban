import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

/* Module Dependencies */

/* Containers */
import { DashboardComponent } from './containers/dashboard/dashboard.component';

/* Components */
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';

/* Services */

/* Routes */
export const ROUTES: Routes = [
  { path: '', children: [
    { path: '', component: DashboardComponent }
  ]}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES)
  ],
  declarations: [
    DashboardComponent,
    HeaderComponent,
    FooterComponent
  ],
  providers: [],
  exports: []
})

export class DashboardModule {}

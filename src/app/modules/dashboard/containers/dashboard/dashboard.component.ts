import { Component, ViewChild, ViewContainerRef, ComponentFactoryResolver, AfterContentInit, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../../../auth/modules/shared/services/auth.service';
import { TransmitService } from '../../../../shared/services/transmit';

@Component({
  selector: 'dashboard',
  styleUrls: ['./dashboard.component.scss'],
  template: `
    <div class="wrapper">
      <header (logout)="onLogout()"></header>
      <board></board>
      <footer></footer>
    </div>
  `
})

export class DashboardComponent implements OnInit {

  constructor(
    private authService: AuthService,
    private transmit: TransmitService,
    private router: Router
  ) {}

  public onPrev() {
    this.transmit.prev.next();
  }

  public onNext() {
    this.transmit.next.next();
  }

  async onLogout() {
    try {
      await this.authService.logout();
      this.router.navigate(['/auth/login']);
    } catch (error) {}
  }

  ngOnInit() {
    console.log('dashboard');
  }
}

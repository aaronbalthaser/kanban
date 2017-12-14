import { Component, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'header',
  styleUrls: ['header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="header">
      <img [src]="logoImg">
      <img (click)="logoutUser()" [src]="logoutImg">
    </div>
  `
})

export class HeaderComponent {
  public logoImg = 'assets/img/logo.svg';
  public logoutImg = 'assets/img/logout.svg';

  @Output() logout = new EventEmitter<any>();

  constructor() {}

  public logoutUser() {
    this.logout.emit()
  }
}

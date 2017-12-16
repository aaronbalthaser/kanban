import { Component, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'header',
  styleUrls: ['header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="header">
      <div class="logo-container">
        <img class="logo" [src]="logoImg">
        <span>Kanban Board</span>
      </div>
      <img (click)="logoutUser()" [src]="logoutImg">
    </div>
  `
})

export class HeaderComponent {
  public logoImg = 'assets/img/logo.png';
  public logoutImg = 'assets/img/logout.svg';

  @Output() logout = new EventEmitter<any>();

  constructor() {}

  public logoutUser() {
    this.logout.emit()
  }
}

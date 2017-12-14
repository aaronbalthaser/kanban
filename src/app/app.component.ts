import { Component, ViewEncapsulation } from '@angular/core';
import { environment } from 'environments/environment';

@Component({
  selector: 'kanban',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./app.component.css'],
  template: `
    <main>
      <router-outlet></router-outlet>
    </main>
  `
})

export class AppComponent {}

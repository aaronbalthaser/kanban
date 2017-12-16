import { Component, Input, OnInit } from '@angular/core';

import { Column } from '../../services/columns.service';

@Component({
  selector: 'column',
  styleUrls: ['column.component.scss'],
  template: `
    <div class="column">
      <header class="header" [ngStyle]="{'background-color': colData.color}">
        {{ colData.name }}
        <img class="btn-add" src="assets/img/add.png">
      </header>
      <section class="content"></section>
    </div>
  `
})

export class ColumnComponent implements OnInit {
  @Input() colData: Column[];

  ngOnInit() {
    console.log(this.colData);
  }
}

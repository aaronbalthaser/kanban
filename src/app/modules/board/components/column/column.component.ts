import { Component, Input, OnInit } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';

import { Column } from '../../services/columns.service';

import { Store } from '../../../../store';

@Component({
  selector: 'column',
  styleUrls: ['column.component.scss'],
  template: `
    <div class="column">
      <header class="header" [ngStyle]="{'background-color': colData.color}">
        {{ colData.name }}
        <img class="btn-add" src="assets/img/add.png">
      </header>
      <section class="content">
        <card *ngFor="let card of cards$ | async" [card]="card"></card>
      </section>
    </div>
  `
})

export class ColumnComponent implements OnInit {
  @Input() colData: Column[];

  public cards$: Observable<any[]>;

  constructor(
    private store: Store
  ) {}

  ngOnInit() {
    this.cards$ = this.store.select('cards')
      .filter(Boolean)
      .map(cards => {
        return cards.filter(card => {
          return card['col'] === this.colData['id'];
        });
      }
    );
  }
}

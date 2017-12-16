import { Component, Input, OnInit } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';

import { Column } from '../../services/columns.service';
import { CardsService } from '../../services/cards.service';

import { Store } from '../../../../store';

@Component({
  selector: 'column',
  styleUrls: ['column.component.scss'],
  template: `
    <div class="column"(dragover)="allowDrop($event)" (drop)="drop($event)">
      <header class="header" [ngStyle]="{'background-color': colData.color}">
        {{ colData.name }}
        <img
            *ngIf="colData.name === 'Pending'"
            class="btn-add"
            src="assets/img/add.png"
            (click)="addTask()">
      </header>
      <section class="content">
        <card *ngFor="let card of cards$ | async" [card]="card" [data]="colData"></card>
      </section>
    </div>
  `
})

export class ColumnComponent implements OnInit {
  @Input() colData: Column[];

  public cards$: Observable<any[]>;

  constructor(
    private store: Store,
    private cardsService: CardsService
  ) {}

  public allowDrop(event) {
    event.preventDefault();
  }

  public drop(event) {
    event.preventDefault();

    let id = event.dataTransfer.getData('data');
    let cards = this.store.value.cards.filter(card => {
      return card['id'] === +id;
    });

    let card = { ...cards[0], col: this.colData['id'] };
    this.cardsService.move(card);
  }

  public addTask() {
    const input = prompt('Add Task');
    this.cardsService.create({
      id: null,
      col: 1,
      description: input
    });
  }

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

import { Component, OnInit, OnDestroy } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';

import { ColumnsService } from '../../services/columns.service';
import { CardsService } from '../../services/cards.service';

import { Store } from '../../../../store';

@Component({
  selector: 'board',
  styleUrls: ['board.component.scss'],
  template: `<column *ngFor="let col of columns$ | async" [colData]="col"></column>`
})

export class BoardComponent implements OnInit, OnDestroy {
  private columns$: Observable<any[]>;
  private subscription1: Subscription;
  private subscription2: Subscription;

  constructor(
    private store: Store,
    private columnsService: ColumnsService,
    private cardsService: CardsService
  ) {}

  ngOnInit() {
    this.subscription1 = this.columnsService.getColumns$.subscribe();
    this.subscription2 = this.cardsService.getCards$.subscribe();
    this.columns$  = this.store.select('columns');
  }

  ngOnDestroy() {
    this.subscription1.unsubscribe();
    this.subscription2.unsubscribe();
  }
}

import { Component, OnInit, OnDestroy } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';

import { ColumnsService } from '../../services/columns.service';

import { Store } from '../../../../store';

@Component({
  selector: 'board',
  styleUrls: ['board.component.scss'],
  template: `
    <column
        *ngFor="let col of columns$ | async"
        [colData]="col">
    </column>
  `
})

export class BoardComponent implements OnInit, OnDestroy {
  private columns$: Observable<any[]>;
  private subscription: Subscription;

  constructor(
    private store: Store,
    private columnsService: ColumnsService
  ) {}

  ngOnInit() {
    this.subscription = this.columnsService.getColumns$.subscribe();
    this.columns$  = this.store.select('columns');
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}

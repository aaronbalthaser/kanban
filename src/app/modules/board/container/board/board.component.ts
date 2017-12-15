import { Component, OnInit } from '@angular/core';

import data from '../../services/data';
import { Store } from '../../../../store';

@Component({
  selector: 'board',
  styleUrls: ['board.component.scss'],
  template: `<column></column>`
})

export class BoardComponent implements OnInit {

  cards$ = this.store.select<any[]>('cards');

  constructor(
    private store: Store
  ) {
    this.store.set('cards', data());
  }

  ngOnInit() {
    console.log(this.store.value);
  }
}

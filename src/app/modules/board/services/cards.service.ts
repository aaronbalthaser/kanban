import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';

import { Store } from '../../../store';

export interface Card {
  id: number;
  description: string;
}

@Injectable()
export class CardsService {
  private api: string = 'http://localhost:3000/cards';

  getCards$: Observable<Card[]> = this.http
    .get(this.api)
    .map(res => res.json())
    .do(cards => this.store.set('cards', cards)
  );

  constructor(
    private http: Http,
    private store: Store
  ) {}
}

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

  private getHighestId() {
    return this.store.value.cards.length;
  }

  public create(model) {
    let id = this.getHighestId() + 1;
    model['id'] = id;

    this.http
      .post(this.api, model)
      .map(res => res.json())
      .subscribe((card: Card) => {
        const cards = this.store.value.cards;
        const cardList = [...cards, card];
        this.store.set('cards', cardList);
      });
  }
}

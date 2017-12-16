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
  private api: string = 'http://localhost:3000/cards/';

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
        const cards = [...this.store.value.cards, card];
        this.store.set('cards', cards);
      });
  }

  public move(card) {
    this.http
      .put(this.api + `${card.id}`, card)
      .map(res => res.json())
      .subscribe((card: Card) => {
        let cardsList = this.store.value.cards.filter(item => {
          return item['id'] !== card['id'];
        });
        const cards = [...cardsList, card];
        this.store.set('cards', cards);
      }
    );
  }
}

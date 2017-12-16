import { Component, Input } from '@angular/core';

import { Card } from '../../services/cards.service';

@Component({
  selector: 'card',
  styleUrls: ['card.component.scss'],
  template: `
    <div class="card">
      {{ card.description }}
    </div>
  `
})

export class CardComponent {
  @Input() card: Card;
}

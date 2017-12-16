import { Component, Input } from '@angular/core';

import { Card } from '../../services/cards.service';

@Component({
  selector: 'card',
  styleUrls: ['card.component.scss'],
  template: `
    <div
        class="card"
        id="{{ card.id }}"
        draggable="true"
        (dragstart)="drag($event)">
      {{ card.description }}
    </div>
  `
})

export class CardComponent {
  @Input() card: Card;

  public drag(event) {
    event.dataTransfer.setData('data', event.target.id);
  }
}

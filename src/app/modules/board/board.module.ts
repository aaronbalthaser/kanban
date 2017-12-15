import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/* Module Dependencies */

/* Containers */
import { BoardComponent } from './container/board/board.component';

/* Components */
import { ColumnComponent } from './components/column/column.component';
import { CardComponent } from './components/card/card.component';

/* Services */

/* Routes */

@NgModule({
  imports: [],
  declarations: [
    BoardComponent,
    ColumnComponent,
    CardComponent
  ],
  providers: [],
  exports: [
    BoardComponent
  ]
})

export class BoardModule {}

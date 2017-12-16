import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';

/* Module Dependencies */

/* Containers */
import { BoardComponent } from './container/board/board.component';

/* Components */
import { ColumnComponent } from './components/column/column.component';
import { CardComponent } from './components/card/card.component';

/* Services */
import { ColumnsService } from './services/columns.service';
import { CardsService } from './services/cards.service';

/* Routes */

@NgModule({
  imports: [
    CommonModule,
    HttpModule
  ],
  declarations: [
    BoardComponent,
    ColumnComponent,
    CardComponent
  ],
  providers: [
    ColumnsService,
    CardsService
  ],
  exports: [
    BoardComponent
  ]
})

export class BoardModule {}

import { Routes } from '@angular/router';
import { ChessComponent } from './chess.component';

export const CHESS_ROUTES: Routes = [
  {
    path: '',
    providers: [ChessStore],
    component: ChessComponent,
    children: [
      {
        path: 'score-move',
        component: ChessMoveComponent,
      },
      {
        path: 'score-sheet',
        component: ScoreSheetComponent,
      },
    ],
  },
];

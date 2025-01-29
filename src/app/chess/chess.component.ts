import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-golf',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterOutlet, RouterLink],
  providers: [],
  template: `
    <div class="flex gap-4">
      <a class="link" routerLink="chess-score-move">Score a Chess Move</a>
      <a class="link" routerLink="chess-score-sheet"
        >See Your Chess Score Sheet</a
      >
    </div>

    <router-outlet />
  `,
  styles: ``,
})
export class ChessComponent {}

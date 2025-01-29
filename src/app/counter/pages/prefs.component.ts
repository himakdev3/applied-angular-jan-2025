import { Component, ChangeDetectionStrategy, signal } from '@angular/core';
@Component({
  selector: 'app-prefs',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [],
  template: `
    <div class="join">
      <!-- <button
        (click)="store.set(1)"
        [disabled]="by() == 1"
        class="btn join-item"
      >
        1
      </button>
      <button (click)="by.set(3)" [disabled]="by() == 3" class="btn join-item">
        3
      </button>
      <button (click)="by.set(5)" [disabled]="by() == 5" class="btn join-item">
        5
      </button> -->
    </div>
  `,
  styles: ``,
})
export class PrefsComponent {
  //store = inject(CounterStore);
}

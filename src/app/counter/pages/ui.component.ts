import {
  Component,
  ChangeDetectionStrategy,
  signal,
  computed,
  inject,
} from '@angular/core';

@Component({
  selector: 'app-ui',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [],
  template: `
    <div>
      <div data-testid="fizzBuzz">{{ getFizzBuzz() }}</div>
      @if (btnFlag()) {
        <button (click)="decrement()" class="btn btn-primary">-</button>
      }
      <span>{{ counter() }}</span>

      <button (click)="increment()" class="btn btn-primary">+</button>
    </div>
  `,
  styles: ``,
})
export class UiComponent {
  //store = inject(SignalStore);
  counter = signal(0);
  btnFlag = computed(() => {
    if (this.counter() > 0) {
      return 'true';
    }
    return '';
  });
  increment() {
    this.counter.update((value) => value + 1);
  }
  decrement() {
    if (this.counter() > 0) {
      this.counter.update((value) => value - 1);
    }
  }
  getFizzBuzz(): string {
    const value = this.counter();
    if (value === 0) {
      return ''; // Do not show anything for zero
    } else if (value % 3 === 0 && value % 5 === 0) {
      return 'FizzBuzz';
    } else if (value % 3 === 0) {
      return 'Fizz';
    } else if (value % 5 === 0) {
      return 'Buzz';
    } else {
      return ''; // Return nothing if not divisible by 3 or 5
    }
  }
}

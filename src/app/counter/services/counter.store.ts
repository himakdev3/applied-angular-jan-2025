import { inject, Injectable, signal } from '@angular/core';
import { signalStore, withMethods, withState } from '@ngrx/signals';

export type ByValues = 1 | 3 | 5;

type CounterState = {
  by: ByValues;
};

// @Injectable({ providedIn: 'root' })
export const CounterStore = signalStore(
  withState<CounterState>({
    by: 1,
  }),
  //withMethods(),
);

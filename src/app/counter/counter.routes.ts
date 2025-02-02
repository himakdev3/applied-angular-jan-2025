import { Routes } from '@angular/router';
import { CounterComponent } from './counter.component';
import { UiComponent } from './pages/ui.component';
import { PrefsComponent } from './pages/prefs.component';

export const COUNTER_ROUTES: Routes = [
  {
    path: '',
    component: CounterComponent,
    children: [
      {
        path: 'app-ui',
        component: UiComponent,
      },
      {
        path: 'app-prefs',
        component: PrefsComponent,
      },
    ],
  },
];

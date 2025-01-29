import { Routes } from '@angular/router';
import { ResourcesComponent } from './resources/resources.component';

export const routes: Routes = [
  {
    path: 'resources',
    component: ResourcesComponent,
  },
  {
    path: 'demos',
    loadChildren: () =>
      import('./demos/demos.routes').then((r) => r.DEMO_ROUTES), // dynamic import
  },
  {
    path: 'golf',
    loadChildren: () => import('./golf/golf.routes').then((r) => r.GOLF_ROUTES),
  },
  // {
  //   path: 'chess',
  //   loadChildren: () =>
  //     import('./chess/chess.routes').then((r) => r.CHESS_ROUTES),
  // },
  {
    path: 'counter',
    loadChildren: () =>
      import('./counter/counter.routes').then((r) => r.COUNTER_ROUTES),
  },
];

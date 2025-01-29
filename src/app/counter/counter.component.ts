import { Component, ChangeDetectionStrategy } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-counter',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterLink, RouterOutlet],
  template: `
    <div>
      Counter Stuff Goes Here
      <div class="flex gap-4">
        <a class="link" routerLink="app-ui">UI</a>
        <a class="link" routerLink="app-prefs">Preference</a>
      </div>
      <router-outlet />
    </div>
  `,
  styles: ``,
})
export class CounterComponent {}

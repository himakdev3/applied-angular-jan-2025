import {
  Component,
  ChangeDetectionStrategy,
  signal,
  computed,
} from '@angular/core';
import { NewItemModel } from './types';

@Component({
  selector: 'app-resources',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [],
  template: `
    <div class="flex flex-col gap-8">
      @for (item of newItems(); track item.id) {
        <div class="card bg-base-100 shadow-xl">
          <div class="card-body">
            <h2 class="card-title">{{ item.title }}</h2>
            <p>{{ item.description }}</p>
            <div class="card-actions justify-end">
              <a
                href="{{ item.link }}"
                target="_blank"
                class="btn btn-primary"
                >{{ item.title }}</a
              >
            </div>
          </div>
        </div>
      }
    </div>

    <div class="stats shadow">
      <div class="stat">
        <div class="stat-title">Total News Items</div>
        <div class="stat-value">{{ totalNewsItems() }}</div>
      </div>
    </div>
  `,
  styles: ``,
})
export class ResourcesComponent {
  newItems = signal<NewItemModel[]>([
    {
      id: '1',
      title: 'Ngrx Site',
      description: 'Signal store, store, effects, all that',
      link: 'https://ngrx.io',
    },
    {
      id: '2',
      title: 'Angular',
      description: 'The official Angular Site',
      link: 'https://angular.dev',
    },
  ]);
  totalNewsItems = computed(() => this.newItems().length);
}

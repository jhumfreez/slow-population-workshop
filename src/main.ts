import 'zone.js/dist/zone';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';
import { FakeHttpService } from './shared/mocks/fake-http.service';
import { Animal, Species } from './zoo-features/zoo.model';
import { forkJoin, map, mergeMap, Observable } from 'rxjs';
import {
  generateMockInventory,
  mockSpecies,
} from './zoo-features/mocks/animal.mock';

@Component({
  selector: 'my-app',
  standalone: true,
  imports: [CommonModule],
  template: `
    <a target="_blank" href="https://angular.io/start">
      Learn more about Angular 
    </a>
  `,
})
export class App {
  inventory$: Observable<Animal[]>;
  // animals$: Observable<Species[]>;
  constructor(
    inventoryLookup: FakeHttpService<Animal[]>,
    animalKnowledge: FakeHttpService<Species[]>
  ) {
    this.inventory$ = animalKnowledge.fetchMockData(mockSpecies, 500).pipe(
      mergeMap((species) => {
        const idList = new Set(species.map((i) => i.id));
        const INVENTORY_SIZE = 10;
        const mockInventory = generateMockInventory(INVENTORY_SIZE, idList);
        const splitResponses: Observable<Animal[]>[] = [];
        // Scenario: API upstream performs too poorly to process entire payload without timing out, so request is parallellized.
        for (const animal of mockInventory) {
          splitResponses.push(inventoryLookup.fetchMockData());
        }
        return forkJoin(splitResponses);
      }),
      map((splitResponses) => {
        return [].concat(splitResponses);
      })
    );
  }
}

bootstrapApplication(App);

import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})

// this is a service-in-service scenario where the MessageService
// is injected into the HeroService which is injected into the HeroesComponent too.
export class HeroService {

  // Angular will inject the singleton MessageService 
  // into that property when it creates the HeroService.
  constructor(private messageService: MessageService) { }

  // fetch the mock heroes
  getHeroes(): Observable<Hero[]> {
    // of(HEROES) returns an Observable<Hero[]> 
    // that emits a single value, the array of mock heroes.
    const heroes = of(HEROES);
    // send a message when the heroes are fetched
    this.messageService.add('HeroService: fetched heroes');
    return heroes;
  }

  getHero(id: number): Observable<Hero> {
    // For now, assume that a hero with the specified `id` always exists.
    // Error handling will be added in the next step of the tutorial.
    const hero = HEROES.find(h => h.id === id)!;
    this.messageService.add(`HeroService: fetched hero id=${id}`);
    return of(hero);
  }
}

import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import { Observable, of } from 'rxjs';
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

  // return the mock heroes
  getHeroes(): Observable<Hero[]> {
    // of(HEROES) returns an Observable<Hero[]> 
    // that emits a single value, the array of mock heroes.
    const heroes = of(HEROES);
    return heroes;
  }
}

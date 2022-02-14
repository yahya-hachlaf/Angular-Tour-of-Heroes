import { Component, OnInit } from '@angular/core';

import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { MessageService } from '../message.service';
@Component({
  selector: 'app-heroes', // the component's CSS element selector
  templateUrl: './heroes.component.html', // the location of the component's template file.
  styleUrls: ['./heroes.component.css'] //  the location of the component's private CSS styles.
})

// Always export the component class so you can import it elsewhere ... like in the AppModule.
export class HeroesComponent implements OnInit {
  
  heroes: Hero[] = [];

  constructor(private heroService: HeroService, private messageService: MessageService) {}

  //call getHeroes() inside the ngOnInit lifecycle hook and let Angular call ngOnInit() 
  //at an appropriate time after constructing a HeroesComponent instance.
  ngOnInit(): void {
    this.getHeroes();
  }

  // getting heroes from the hero service
  // because of the asynchronous operation of calling fetchinf heroes 
  // a server we need to change the returned value of heros as an observable
  // so now the function waits for the Observable to emit the array of heroes—which 
  // could happen now or several minutes from now.
  getHeroes(): void {

    // The subscribe() method passes the emitted array to the callback, 
    // which sets the component's heroes property.
    this.heroService.getHeroes()
        .subscribe(heroes => this.heroes = heroes);
  }

}

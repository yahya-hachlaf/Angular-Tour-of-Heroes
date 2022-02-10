import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HEROES } from '../mock-heroes';

@Component({
  selector: 'app-heroes', // the component's CSS element selector
  templateUrl: './heroes.component.html', // the location of the component's template file.
  styleUrls: ['./heroes.component.css'] //  the location of the component's private CSS styles.
})

// Always export the component class so you can import it elsewhere ... like in the AppModule.
export class HeroesComponent implements OnInit {

  hero: Hero = {
    id: 1,
    name: 'Windstorm'
  };

  heroes = HEROES;

  //  assign the clicked hero from the template to the component's selectedHero
  selectedHero?: Hero;
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  constructor() { }

  ngOnInit(): void {
  }

}

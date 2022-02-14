import { Component, OnInit, Input } from '@angular/core';
import { Hero } from '../hero';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { HeroService } from '../hero.service';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {

  @Input() hero?: Hero; // Input decorator make the hero propety available for binding by the external HeroesComponent

  constructor(
    private route: ActivatedRoute, // holds information about the route to this instance of the HeroDetailComponent. 
    private heroService: HeroService, // gets hero data from the remote server and this component will use it to get the hero-to-display.
    private location: Location // is an Angular service for interacting with the browser.
  ) {}

  ngOnInit(): void {
    this.getHero();
  }
  
  getHero(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.heroService.getHero(id)
      .subscribe(hero => this.hero = hero);
  }

}

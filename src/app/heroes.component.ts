import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Hero} from './hero';
import {HeroService} from './hero.service';


@Component({
  selector: 'my-heroes',
  templateUrl: `./heroes.component.html`,
  styleUrls: [`./heroes.component.css`],
    providers: [HeroService],
})
export class HeroesComponent implements OnInit  { 
  title = 'Tour of Heroes';
  heroes : Hero[];
  selectedHero: Hero;

  constructor(
    private router: Router,
    private heroService: HeroService
  ){}

  getHeroesSlowly(): void {
    this.heroService.getHeroesSlowly().then(heroes => this.heroes = heroes);
  }
 
  ngOnInit(): void {
    this.getHeroesSlowly();
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
    console.log(hero);
  };

  gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedHero.id]);
  }
}


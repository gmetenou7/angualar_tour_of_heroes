import { Component, OnInit } from '@angular/core';
import { Hero } from '../interface/hero';
import { HeroService } from '../service/hero.service';



@Component({
  selector: 'app-dashbord',
  templateUrl: './dashbord.component.html',
  styleUrls: ['./dashbord.component.css']
})
export class DashbordComponent implements OnInit {
  heroes: Hero[] = [];

  constructor(private heroService: HeroService) { }

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getAllHeroes()
      .subscribe(heroes => this.heroes = heroes.slice(1, 5));
  }
}

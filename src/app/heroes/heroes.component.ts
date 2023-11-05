import { Component, OnInit } from '@angular/core';
import {  Hero } from "../interface/hero";
import { HeroService } from '../service/hero.service';
import { MessageService } from 'primeng/api';


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  selectedHero?:Hero;
  hereos : Hero[] = [];


  constructor(
    private heroService : HeroService,
    //private messageService: MessageService
  ){}

  ngOnInit(): void {
    this.getHereos();
  }

  getHereos() : void{
    this.heroService.getAllHeroes().subscribe(heroes => this.hereos = heroes);
  }

  onSelect(hero : Hero){
    this.selectedHero = hero;
    //this.messageService.add({ severity: 'success', summary: 'Success', detail: `HeroesComponent: Selected hero id=${hero.id}` });
  }

}

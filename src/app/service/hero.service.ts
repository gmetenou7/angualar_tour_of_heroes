import { Injectable } from '@angular/core';
import { Hero } from "../interface/hero";
import { listOfHereos } from "../data/hereos.data";

import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';


@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private messages : MessageService) { }

  getAllHeroes() : Observable <Hero[]> {
    const heroes = of(listOfHereos);
    this.messages.add("liste des hero affiché avec succès");
    return heroes;
  }


  getHero(id: number): Observable<Hero> {
    const hero = listOfHereos.find(h => h.id === id)!;
    this.messages.add(`HeroService: fetched hero id=${id}`);
    return of(hero);
  }

}

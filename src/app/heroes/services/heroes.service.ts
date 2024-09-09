import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, Observable, of } from 'rxjs';
import { Hero } from '../interfaces/hero.interface';
import { environments } from '../../../environments/environments';

@Injectable({providedIn: 'root'})
export class HerosService {

  private baseURl: string = environments.baseUrl;

  constructor(private httpClient: HttpClient) { }


  getHeroes():Observable<Hero[]>{
    return this.httpClient.get<Hero[]>(`${this.baseURl}/heroes`);
  }

  getHeroById(id:string): Observable<Hero | undefined>{
    return this.httpClient.get<Hero>(`${this.baseURl}/heroes/${id}`)
    .pipe(
      catchError(error => of(undefined))
    );
  }

  getSuggestions(query: string):Observable<Hero[]>{
    return this.httpClient.get<Hero[]>(`${this.baseURl}/heroes?q=${query}_limit=6`);
  }

}

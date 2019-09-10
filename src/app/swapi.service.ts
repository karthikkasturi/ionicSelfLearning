import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class SwapiService {
  baseUrl: string;

  constructor(public httpClient: HttpClient) {
    this.baseUrl = "https://swapi.co/api/";
  }

  getFilms(): Observable<Object> {
    return this.httpClient
    .get(this.baseUrl + "films");
  }

  getFilm(filmId: Number) {
    return this.httpClient
      .get(this.baseUrl + "films/" + filmId)
  }

}

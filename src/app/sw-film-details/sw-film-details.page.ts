import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SwapiService } from '../swapi.service';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-sw-film-details',
  templateUrl: './sw-film-details.page.html',
  styleUrls: ['./sw-film-details.page.scss'],
})
export class SwFilmDetailsPage implements OnInit {
  
  filmId:Number;
  filmObs: Observable<Object>;
  film:any = {};

  constructor(public route:ActivatedRoute, public service: SwapiService) { }

  ngOnInit() {
    this.filmId = parseInt(this.route.snapshot.paramMap.get('id'));
    this.filmObs = this.service.getFilm(this.filmId);
    this.filmObs.subscribe(data => this.film = data);
  }

}

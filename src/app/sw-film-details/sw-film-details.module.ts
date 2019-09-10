import { SwapiService } from './../swapi.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { SwFilmDetailsPage } from './sw-film-details.page';

const routes: Routes = [
  {
    path: '',
    component: SwFilmDetailsPage
  }
];


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [SwFilmDetailsPage]
})
export class SwFilmDetailsPageModule {
  film:any;
  constructor(public service:SwapiService){
    
  }
  ngOnInit() {
    this.service.getFilms()
  }
}

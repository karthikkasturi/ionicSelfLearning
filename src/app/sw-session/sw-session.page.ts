import { LoadingController } from '@ionic/angular';
import { SwapiService } from './../swapi.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-sw-session',
  templateUrl: './sw-session.page.html',
  styleUrls: ['./sw-session.page.scss'],
})
export class SwSessionPage implements OnInit {
  

  filmsArr:any[];
  loader:any;

  constructor(public service:SwapiService, public loadingController:LoadingController) { 
    this.filmsArr = [];
  }

  async createLoader(){
    this.loader = await this.loadingController.create();
    this.loader.present();
  }

  ngOnInit() {
    this.createLoader();
    var films:Observable<any> = this.service.getFilms() 
    films.subscribe(data => {
      console.log(data.results)
      this.filmsArr = [...data.results];
      this.loader && this.loader.dismiss();
      // data.results.forEach(film => {
      //   this.filmsArr.push(film)
      // });
    })
  }

}

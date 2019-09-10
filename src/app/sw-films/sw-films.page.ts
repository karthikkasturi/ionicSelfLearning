import { SwapiService } from './../swapi.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { LoadingController } from '@ionic/angular';


@Component({
  selector: 'app-sw-films',
  templateUrl: './sw-films.page.html',
  styleUrls: ['./sw-films.page.scss'],
})
export class SwFilmsPage implements OnInit {
  films:Observable<any>
  filmsArr:[];
  loader:any;

  constructor(public service: SwapiService, public loadingController: LoadingController) { 
    this.filmsArr = [];
  }
  async presentLoader(){
    this.loader = await this.loadingController.create({
      message: "Be patient, Luke.!"
    })
    this.loader.present();
  }

  ngOnInit() {
    this.presentLoader();
    this.films = this.service.getFilms()
    this.films.subscribe(data=>{
      console.log(data)
      let x = data.results as [];
      x.forEach(y=>this.filmsArr.push(y))
      this.loader && this.loader.dismiss();
    })
  }
  run(){}
}

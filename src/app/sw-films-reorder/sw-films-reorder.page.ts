import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Component, OnInit, ViewChild } from '@angular/core';
import { SwapiService } from '../swapi.service';
import { LoadingController, IonSearchbar } from '@ionic/angular';
import { Observable } from 'rxjs';
import { __core_private_testing_placeholder__ } from '@angular/core/testing';

@Component({
  selector: 'app-sw-films-reorder',
  templateUrl: './sw-films-reorder.page.html',
  styleUrls: ['./sw-films-reorder.page.scss'],
})
export class SwFilmsReorderPage implements OnInit {
  @ViewChild(IonSearchbar, {static: false}) searchBar:IonSearchbar;
  films:Observable<any>
  filmsArr:any[];
  filmsArrFiltered:any[];
  loader:any;

  enableReorder:boolean = false;

  constructor(public service: SwapiService, public loadingController: LoadingController) { 
    this.filmsArr = [];
    this.filmsArrFiltered = [];
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
      this.setSearch();
    })
  }

  setSearch()
  {
    let filterVal = this.searchBar.value;
    this.filmsArrFiltered.splice(0, this.filmsArrFiltered.length);
    console.log(filterVal)
    this.filmsArrFiltered.push(...this.filmsArr.filter(x => x.title.indexOf(filterVal) > -1))
    console.log(this.filmsArrFiltered)
  }

  doReorder(ev){
    ev.detail.complete();
  }
  doReorderFilms(ev){
    console.log(ev.detail)
    var from = ev.detail.from;
    var to = ev.detail.to;
    if(to > from)
    {
      to -= 1;
    }
    this.filmsArr.splice(ev.detail.to, 0, ...this.filmsArr.splice(from, 1))
    ev.detail.complete();
  }

  
  public onReorderToggle()
  {
    if(this.enableReorder)
    {
      // DB CALL TO SAVE DATA
    }
    this.enableReorder = !this.enableReorder;
  }

}

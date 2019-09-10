import { SwapiService } from './../swapi.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { IonInfiniteScroll, IonContent } from '@ionic/angular';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-sw-infinite',
  templateUrl: './sw-infinite.page.html',
  styleUrls: ['./sw-infinite.page.scss'],
})
export class SwInfinitePage implements OnInit {
  @ViewChild(IonInfiniteScroll, {static: false}) ionInfiniteScroll:IonInfiniteScroll;
  @ViewChild(IonContent, {static: false}) content: IonContent;
  
  loaderTexts = [
    "Young skywalker",
    "Death is a natural part of life. Rejoice for those around you who transform into the Force. Mourn them do not. Miss them do not. Attachment leads to jealously. The shadow of greed, that is.",
    "May the force be with you.",
    "Smaller in number are we, but larger in mind.",
    "Stay for some soup you must.",
    "Feel the force!",
    "Do or do not! There is no try!",
  ]
  filmsArr:any[];
  count:number;

  constructor(public service: SwapiService){}

  ngOnInit() {
    this.filmsArr = []
    this.count = 0;
    this.addMoreFilms();
  }

  loadData(e){
    // setTimeout(function(){
    //   e.target.complete();
    // }, 4000)
    this.addMoreFilms(function(){
      e.target.complete();
      
    });
  }

  addMoreFilms(callback?){
    var films:Observable<any> = this.service.getFilms()
    films.subscribe(data =>{
      data.results.forEach(film => {
        film.title = film.title + this.count;
        this.filmsArr.push(film);
      });
      this.count++;
      if(callback){
        callback();
      }
      this.updateLoaderText();
    })
  }

  updateLoaderText(){
    this.loaderTexts = [...this.loaderTexts.splice(1), ...this.loaderTexts];
  }

  toggle(e){
    this.ionInfiniteScroll.disabled = !e.detail.checked;
  }

  scrollTop(){
    this.content.scrollToTop();
  }

  doRefresh(e){
    console.log('refreshing')
    this.filmsArr = [];
    this.addMoreFilms(() => {
      e.target.complete();
    });
    setTimeout(() => {
      e.target.complete();
    }, 4000);
  }

}

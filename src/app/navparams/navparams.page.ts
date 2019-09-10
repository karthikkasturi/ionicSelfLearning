import { NavparamsPagePage } from './../navparams-page/navparams-page.page';
import { Component, OnInit } from '@angular/core';
import { NavController, ModalController, PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-navparams',
  templateUrl: './navparams.page.html',
  styleUrls: ['./navparams.page.scss'],
})
export class NavparamsPage {

  constructor(public navCtrl: NavController,public modalCtrl:ModalController,public popCtrl: PopoverController) {

  }
  async onClickModal(Event){
    let profiemodal = await this.modalCtrl.create({
      component: NavparamsPagePage,
      componentProps: {
        "parmData": "modal",
      },
      
    })
    await profiemodal.present();

    profiemodal.onDidDismiss().then(data=>{
      console.log(data);
    })
    // profiemodal.present({
    //   ev:Event
    // });
    
  }
  async onClickPopOver(myEvent){
    let popup = await this.popCtrl.create({
      component: NavparamsPagePage,
      event: myEvent,
      componentProps: {
        "parmData": "popup"
      }
    });
    await popup.present();
  }
}

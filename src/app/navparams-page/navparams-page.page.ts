import { ModalController, NavParams, PopoverController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navparams-page',
  templateUrl: './navparams-page.page.html',
  styleUrls: ['./navparams-page.page.scss'],
})
export class NavparamsPagePage implements OnInit {

  public text = "";

  constructor(public modalController: ModalController, public navParms: NavParams, public popupController : PopoverController) { }

  ngOnInit() {
    this.text = this.navParms.get("parmData");
  }

  onDismiss(){
    this.modalController.dismiss({
      "parm": this.text
    })
  }

}

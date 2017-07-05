import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-jcontent',
  templateUrl: 'jcontent.html',
})
export class JcontentPage {

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public alertCtrl: AlertController
  ) {
  }

 popup(){
   let alert = this.alertCtrl.create({
       title: 'Thank You!',
       subTitle: 'You\'ve "liked this artist"',
       buttons: ['OK']
     });
     alert.present();
}

}

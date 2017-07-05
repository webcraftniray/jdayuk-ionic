import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { JoomlaapiProvider } from '../../providers/joomlaapi/joomlaapi';


@IonicPage()
@Component({
  selector: 'page-jcontent',
  templateUrl: 'jcontent.html',
})
export class JcontentPage {

public categoyList: any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public alertCtrl: AlertController,
    public joomlaApi: JoomlaapiProvider
  ) {
    this.getCategoriesFromApi();
  }

 popup(){
   let alert = this.alertCtrl.create({
       title: 'Thank You!',
       subTitle: 'We\'ll get your articles soon!',
       buttons: ['OK']
     });
     alert.present();
}

getCategoriesFromApi() {
    this.joomlaApi.getCategoryList()
      .then(CategoryList => {
        this.categoyList = CategoryList.categories;
        console.log(this.categoyList);
      });
}



}

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, LoadingController } from 'ionic-angular';
import { JoomlaapiProvider } from '../../providers/joomlaapi/joomlaapi';
import { JarticlesPage } from '../jarticles/jarticles';


@IonicPage()
@Component({
  selector: 'page-jcontent',
  templateUrl: 'jcontent.html',
})
export class JcontentPage {

public categoyList: any;
private loading: any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public alertCtrl: AlertController,
    public joomlaApi: JoomlaapiProvider,
    public loadingCtrl: LoadingController
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
  this.presentLoading();
    this.joomlaApi.getCategoryList()
      .then(CategoryList => {
        this.categoyList = CategoryList.categories;
        this.dismissLoading();
      });
}

getMyArticles(id){
  this.navCtrl.push(JarticlesPage, { id: id });
}

private presentLoading() {
    this.loading = this.loadingCtrl.create({
      spinner: 'dots',
      content: "Please wait...",
    });

    return this.loading.present();
  }

private dismissLoading() {
    this.loading.dismiss();
  }



}

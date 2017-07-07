import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { JoomlaapiProvider } from '../../providers/joomlaapi/joomlaapi';

@IonicPage()
@Component({
  selector: 'page-jarticles',
  templateUrl: 'jarticles.html',
})
export class JarticlesPage {

  public ArticleList: any;
  private loading: any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public joomlaApi: JoomlaapiProvider,
    public loadingCtrl: LoadingController
  ) {
    this.getArticleListFromApi(this.navParams.get('id'));
  }

getArticleListFromApi(catId){
  this.presentLoading();
  this.joomlaApi.getArticlesInCategory(catId).subscribe((ArticleList)=>{
              this.ArticleList = ArticleList.articles;
                this.dismissLoading();
        });
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

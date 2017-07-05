import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { JoomlaapiProvider } from '../../providers/joomlaapi/joomlaapi';

@IonicPage()
@Component({
  selector: 'page-jarticles',
  templateUrl: 'jarticles.html',
})
export class JarticlesPage {

  public ArticleList: any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public joomlaApi: JoomlaapiProvider
  ) {
    this.getArticleListFromApi(this.navParams.get('id'));
  }

getArticleListFromApi(catId){
  this.joomlaApi.getArticlesInCategory(catId)
    .then(ArticleList => {
      this.ArticleList = ArticleList.articles;
    });
}


}

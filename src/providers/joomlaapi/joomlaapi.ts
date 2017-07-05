import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class JoomlaapiProvider {

 public CategoryList: any;
 public ArticleList: any;
 private api_key = "KCV0W202JBIQV5FPQLWI";
 private baseApiUrl = "https://jdayuk.ehcdev.co.uk/api/";

  constructor(public http: Http) {}

getCategoryList() {
  if (this.CategoryList) {
      return Promise.resolve(this.CategoryList);
    }

    return new Promise(resolve => {
      this.http.get(this.baseApiUrl + "get/content/categories?rootid=0&api_key=" + this.api_key)
        .map(res => res.json())
        .subscribe(data => {
          this.CategoryList = data;
          resolve(this.CategoryList);
        });
    });
}

getArticlesInCategory(catId) {
  if (this.ArticleList) {
      return Promise.resolve(this.ArticleList);
    }

    return new Promise(resolve => {
      this.http.get(this.baseApiUrl + "get/content/articles?catid="+catId+"&limit=100&offset=0&api_key=" + this.api_key)
        .map(res => res.json())
        .subscribe(data => {
          this.ArticleList = data;
          resolve(this.ArticleList);
        });
    });
}

}

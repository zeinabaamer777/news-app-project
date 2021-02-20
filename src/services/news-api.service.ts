import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { Article } from 'src/models/article.model';

@Injectable({
  providedIn: 'root'
})
export class NewsApiService {

  // full_url 
  // https://newsapi.org/v2/top-headlines?sources=google-news&apiKey=33ba70d6367648b49a76910dfad62ad4

  api_key = '33ba70d6367648b49a76910dfad62ad4';
  data = new BehaviorSubject(null);

  constructor(private http:HttpClient) { }

  initArticles(){
      return this.http.get<Observable<Article[]>>('https://newsapi.org/v2/top-headlines?sources=google-news&apiKey='+this.api_key);
  }


   //#region Subject 
   private transferSubject$ : Subject<Article> = new Subject<Article>();

   getArtcleSubject(){
     return this.transferSubject$;
   }
 
   setArticleSubject(article){
     this.transferSubject$.next(article);
   }
   //#endregion
}

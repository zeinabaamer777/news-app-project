import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { Article } from 'src/models/article.model';
import { NewsApiService } from 'src/services/news-api.service';

@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.scss']
})
export class NewsListComponent implements OnInit {
  articles: Observable<Article[]>;
  article: [];
  recentArticles: Article[];
  mostPopular: Article[];

  constructor(private newsApiService: NewsApiService,
    private router: Router) { 
    }

  ngOnInit() {
    this.loadArticles();
    
  }

  //#region 1 loadArticles() method to initArticles from NewsApiServices

  loadArticles() {
    this.newsApiService.initArticles().subscribe((data: Observable<Article[]>) => {
      // debugger
      this.articles = data['articles'];
      // console.log(this.articles);
      this.recentArticles = data['articles'].slice(-3);
      //console.log(this.recentArticles)
      this.mostPopular= data['articles'].slice(0,5);
    })
  }

  //#endregion

  //#region 2 catchArticle() to send the selected object to details page 
  //and navigate to it's router

  catchArticle(selectedArtcle) {
    console.log("selected artcle",selectedArtcle);
    // this.newsApiService.setArticleSubject(selectedArtcle);
    this.newsApiService.data.next(selectedArtcle);
    this.router.navigate(['/articleDetails'])
  }
//#region 

//#region suscripeForm() to subscripe onform
model :any = {};
onSubmit(model) {
  alert('SUCCESS :-)\n\n' + JSON.stringify(this.model) + '  is subscriped')
}

}

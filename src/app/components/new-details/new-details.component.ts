import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Article } from 'src/models/article.model';
import { NewsApiService } from 'src/services/news-api.service';

@Component({
  selector: 'app-new-details',
  templateUrl: './new-details.component.html',
  styleUrls: ['./new-details.component.scss']
})
export class NewDetailsComponent implements OnInit {

  article: Article;
  comment: any;
  data: any;


 
  constructor(private newsApiService: NewsApiService,
    private route: ActivatedRoute) {
    
    this.newsApiService.data.subscribe(res => {
      this.article = res
    })
   }

  ngOnInit() {
    this.constCommet();
    console.log(this.article)
  }

  constCommet(){
    
    this.data = {
              name: "Olya",
              imagePath: "../assets/images/download.png",
              timeToComment: "jan 10,2013",
              description: `Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
               when an unknown printer took a galley of type and scrambled it to make a type specimen book`
    }

    this.comment = this.data;
    console.log(this.comment)

  }
}

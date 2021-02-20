import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { NewDetailsComponent } from './components/new-details/new-details.component';
import { NewsListComponent } from './components/news-list/news-list.component';
import { PageNotFoundComponent } from './shared-components/page-not-found/page-not-found.component';


const routes: Routes = [
  { path: '',   redirectTo: '/news', pathMatch: 'full' },
  { path: 'news', component: NewsListComponent },
  // { path: 'news/news', component: NewDetailsComponent },
  { path: 'articleDetails', component: NewDetailsComponent },

  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TimelineComponent } from './timeline/timeline.component';
import { TweetDetailComponent } from './tweet-detail/tweet-detail.component';
import { CreateTweetComponent } from './create-tweet/create-tweet.component';

const routes: Routes = [
  { path: '', redirectTo: '/timeline', pathMatch: 'full' },
  { path: 'timeline', component: TimelineComponent },
  { path: 'detail/:id', component: TweetDetailComponent },
  { path: 'create-tweet', component: CreateTweetComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

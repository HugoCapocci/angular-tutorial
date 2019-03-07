import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TimeAgoPipe } from 'time-ago-pipe';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TimelineComponent } from './timeline/timeline.component';
import { TweetComponent } from './tweet/tweet.component';
import { UserBoxComponent } from './user-box/user-box.component';
import { TweetDetailComponent } from './tweet-detail/tweet-detail.component';
import { CreateTweetComponent } from './create-tweet/create-tweet.component';

@NgModule({
  declarations: [
    AppComponent,
    TimelineComponent,
    TimeAgoPipe,
    TweetComponent,
    UserBoxComponent,
    TweetDetailComponent,
    CreateTweetComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

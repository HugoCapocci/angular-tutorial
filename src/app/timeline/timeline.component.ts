import { Component, OnInit, ViewChild } from '@angular/core';

import { Tweet } from '../tweet';
import { User } from '../user';
import { UserBoxComponent } from '../user-box/user-box.component';
import { TweetsService } from '../tweets.service';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.less']
})
export class TimelineComponent implements OnInit {
  @ViewChild(UserBoxComponent)
  user: User = {};
  tweets: Tweet[];

  constructor(private tweetsService: TweetsService) { }

  ngOnInit() {
    this.getTweets();
  }

  addTweet(text: string) {
    const tweet: Tweet = {
      created_at: new Date().toISOString(),
      id: this.tweets.length + 1,
      text,
      user: this.user.name
    };
    this.tweets.push(tweet);
  }

  getTweets(): void {
    this.tweets = this.tweetsService.getTweets();
  }
}

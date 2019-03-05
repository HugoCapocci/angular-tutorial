import { Component, OnInit, Input } from '@angular/core';

import { Tweet } from '../tweet';

@Component({
  selector: 'app-tweet',
  templateUrl: './tweet.component.html',
  styleUrls: ['./tweet.component.less']
})
export class TweetComponent implements OnInit {

  @Input() tweet: Tweet;

  constructor() { }

  ngOnInit() {
  }

  likeTweet() {
    if(!this.tweet.isLiked) {
      this.tweet.favoriteCount ? this.tweet.favoriteCount++ : this.tweet.favoriteCount = 1;
      this.tweet.isLiked = true;
    } else {
      this.tweet.favoriteCount--;
      this.tweet.isLiked = false;
    }
  }
}

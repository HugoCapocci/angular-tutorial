import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

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
  tweets: Tweet[];

  constructor(private tweetsService: TweetsService, private router: Router) {}

  ngOnInit() {
    this.getTweets();
  }

  goToDetail(tweetId: number) {
    this.router.navigateByUrl('/detail/' + tweetId);
  }

  getTweets(): void {
    this.tweetsService.getTweets().subscribe(tweets => {
      this.tweets = tweets;
    });
  }
}

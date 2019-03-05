import { Component, OnInit } from '@angular/core';
import { Tweet } from '../tweet';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.less']
})
export class TimelineComponent implements OnInit {
  tweets: Tweet[] = [
     {
      created_at: 'Wed Apr 05 12:30:12 +0000 2017',
      id: 1,
      text: 'Je mets les pieds où je veux, Little John… et c\'est souvent dans la gueule.',
      user: 'James Braddock'
    },
    {
      created_at: 'Thu Apr 06 15:24:15 +0000 2017',
      id: 2,
      text: 'Qui a deux pouces et qui s\'en fout ? Bob Kelso !',
      user: 'Bob kelso',
      favoriteCount: 2
    },
  ];

  private user;

  constructor() { }

  ngOnInit() {
  }

  addTweet(text: string) {
    const tweet: Tweet = {
      created_at: new Date().toISOString(),
      id: this.tweets.length + 1,
      text,
      user: this.user
    }
    this.tweets.push(tweet);
  }
}

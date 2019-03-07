import { Component, OnInit } from '@angular/core';

import { UserService } from '../user.service';
import { TweetsService } from '../tweets.service';
import { User } from '../user';

@Component({
  selector: 'app-create-tweet',
  templateUrl: './create-tweet.component.html',
  styleUrls: ['./create-tweet.component.less']
})
export class CreateTweetComponent implements OnInit {

  public user: User;
  constructor(private userService: UserService, private tweetService: TweetsService) { }

  ngOnInit() {
    this.userService.user.subscribe(user => {
      this.user = user;
    });
  }

  addTweet(text: string) {
    this.tweetService.createTweet(text, this.user.name);
  }

}

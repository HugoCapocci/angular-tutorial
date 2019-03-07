import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, concat } from 'rxjs';
import { map, tap } from 'rxjs/operators';

import { Tweet } from './tweet';

const TWEETS_API_URL = 'assets/tweets.json'

@Injectable({
  providedIn: 'root'
})
export class TweetsService {
  tweets: BehaviorSubject<Tweet[]> = new BehaviorSubject<Tweet[]>([]);

  constructor(private httpClient: HttpClient) {
    httpClient.get(TWEETS_API_URL).subscribe((tweets: Tweet[]) => {
      this.tweets.next(tweets);
    });
  }

  getTweets() {
    return this.tweets;
  }

  getTweetById(id: number) {
    return this.tweets.pipe(
      map((tweets: Tweet[]) =>
        tweets.find(tweet => tweet.id === id)
      )
    );
  }

  createTweet(text: string, userName: string) {
    return this.tweets.subscribe((tweets: Tweet[]) => {
      const tweet: Tweet = {
        created_at: new Date().toISOString(),
        id: tweets.length + 1,
        text,
        user: userName
      };
      tweets.push(tweet);
    });
  }
}

import { Component, OnInit } from '@angular/core';
import { Tweet } from '../tweet';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.less']
})
export class TimelineComponent implements OnInit {
  tweets:Tweet[] = [
     {
      created_at: 'Wed Apr 05 12:30:12 +0000 2017',
      id: 0,
      text: 'Je mets les pieds où je veux, Little John… et c\'est souvent dans la gueule.',
      user: 'James Braddock',
      like: 31, 
      liked: false,
    },
    {
      created_at: 'Thu Apr 06 15:24:15 +0000 2017',
      id: 1,
      text: 'Qui a deux pouces et qui s\'en fout ? Bob Kelso !',
      user: 'Bob kelso',
      like: 2, 
      liked: false,
    },
  ];

  constructor() { }

  ngOnInit() {
  }

  onSubmit(f: NgForm) {
    if(f.valid)
    {
      let newTweet = {
        "created_at": new Date().toString(),
        "id":this.tweets.length,
        "text":f.value.tweetValue,
        "user": 'Aurélien',
        like: 0,
        liked: false,
     }
     this.tweets.push(newTweet);
    }else{
      alert('Un tweet ne peut pas être vide')
    }
    
  }
  UpdateLike(element: number){
  
    let found = this.tweets.find(function(target){
      return target.id === element;
      
    })
    //console.log(found)
    if(!found['liked'])
    {
      found['liked'] = true;
      found['like'] = found['like'] + 1;
    }else{
      found['liked'] = false;
      found['like'] = found['like'] - 1;
    }
  }

}

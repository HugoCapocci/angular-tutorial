import { Component, OnInit } from '@angular/core';
import { Tweet } from '../tweet';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.less']
})
export class TimelineComponent implements OnInit {
  username:string = undefined;
  disabled: boolean = false;
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
      if(this.username!== undefined && this.username !== "")
      {
        let newTweet = {
          "created_at": new Date().toString(),
          "id":this.tweets.length,
          "text":f.value.tweetValue,
          "user": this.username,
          like: 0,
          liked: false,
        }
        this.tweets.push(newTweet);
        this.disabled = false;
      }else{
        alert('Veuillez saisir un nom d\'utilisateur')
        this.disabled = true;
      }
    }else{
      alert('Un tweet ne peut pas être vide')
    }
    
  }
  UpdateUsername(form1: NgForm){
    if(form1.valid){
      this.username = form1.value.username;
      this.disabled = false;
      console.log(this.disabled)
    }
  }
  UpdateLike(element: number){
    let found = this.tweets.find(function(tweet){
      return tweet.id === element; 
    })//callback de l'élement contenant l'Id
      
    //Traitement
    if(!found['liked']){
      found['liked'] = true;
      found['like'] = found['like'] + 1;
    }else{
      found['liked'] = false;
      found['like'] = found['like'] - 1;
    }
  }

}

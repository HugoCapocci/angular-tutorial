import { Component, OnInit, Input } from '@angular/core';

import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-box',
  templateUrl: './user-box.component.html',
  styleUrls: ['./user-box.component.less']
})
export class UserBoxComponent implements OnInit {
  @Input()
  user: User;

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.userService.user.subscribe(user => {
      this.user = user;
    });
  }

  handleUserChange() {
    this.userService.setUser(this.user);
  }

}

import { Component, OnInit, Input } from '@angular/core';

import { User } from '../user';

@Component({
  selector: 'app-user-box',
  templateUrl: './user-box.component.html',
  styleUrls: ['./user-box.component.less']
})
export class UserBoxComponent implements OnInit {
  @Input()
  user: User;

  constructor() { }

  ngOnInit() {
  }
}

import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private messageSource = new BehaviorSubject<User>({});
  public user = this.messageSource.asObservable();

  constructor() { }

  setUser(user: User) {
    this.messageSource.next(user);
  }
}

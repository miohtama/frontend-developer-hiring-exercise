import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { User } from './models';


// For inspiration, please check https://github.com/cornflourblue/angular-8-registration-login-example
@Injectable({
  providedIn: 'root'
})
export class UserService {

  // Faux local user storage as we do not have session service in this example app
  // Inspired by https://github.com/cornflourblue/angular-8-registration-login-example/blob/master/src/app/_services/authentication.service.ts
  private currentUserSubject: BehaviorSubject<User>;
  public currentUser: Observable<User>;

  constructor() { 
    this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();    
  }

  getCurrentUser(): User {
    return this.currentUserSubject.value;
  }

  /**
   * Registers a new user and sets up the session immediately.
   *     
   */
   // update entry parameter
  register(email, name, password, phone): User {
    let user = new User(email, name, phone);
    localStorage.setItem('currentUser', JSON.stringify(user));
    this.currentUserSubject.next(user);
    return user;
  }

  logout() {
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
  }  
}

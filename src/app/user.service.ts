import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
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

  /** Registers a new user and sets up the session immediately. **/

  // Return a promise to simulate a return from an end-point and magamenet async running in sign-up-form with then().
  async register(data: User): Promise<User> {

    // Create an user with all atributes which are possible to create (unless id obviously, which is optional).
    let user = await new User(data.email, data.name, data.password, data.phoneNumber);

    localStorage.setItem('currentUser', JSON.stringify(user));
    this.currentUserSubject.next(user);

    return user;

  }

  logout() {
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
  }

  // return a string with the format requiered to save.
  setFormatPhone(code_country: number, phone_country: number): string {

    return `+${code_country}${phone_country}`;

  }

}

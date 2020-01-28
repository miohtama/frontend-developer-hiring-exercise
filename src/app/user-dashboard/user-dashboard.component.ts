import { Component, OnInit } from '@angular/core';

import {UserService} from '../user.service';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.scss']
})
export class UserDashboardComponent implements OnInit {

  constructor(private userService: UserService) { }

  ngOnInit() {
  }

  getFullName(): string {    
    const user = this.userService.getCurrentUser();
    return user && user.name || '';
  }

}

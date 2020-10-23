import { Component, OnInit } from '@angular/core';
import { User } from '../models';

// Jquery variable.
declare const $;

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})

export class SignUpComponent implements OnInit {

  // user variable to display data in DOM.
  private user: User;

  constructor() { }

  ngOnInit() {

  }

  // method called from child component tag in HTML.
  showToast(user: User) {

    this.user = user;

    // force to show the toast.
    $('.toast').toast('show');

    // navigate to '/home' after the toast notification was showed, navigate() isn't working inside Jquery block.
    $('.toast').on('hidden.bs.toast', function () {
      window.location.href = "/home";
    });

  }
}

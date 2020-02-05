import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { UserService } from '../user.service';

// For inspiration, you can look at https://stackblitz.com/edit/example-angular-material-reactive-form?file=app%2Fapp.component.html
@Component({
  selector: 'app-sign-up-form',
  templateUrl: './sign-up-form.component.html',
  styleUrls: ['./sign-up-form.component.scss']
})
export class SignUpFormComponent implements OnInit {

  formGroup: FormGroup;

  constructor(private formBuilder: FormBuilder, private router: Router, private userService: UserService) { 
  }

  ngOnInit() {
    // Construct the form using the injected FormBuilder
    //  add new attibute phone
    const emailregex: RegExp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    this.formGroup = this.formBuilder.group({
      'email': [null, [Validators.required, Validators.pattern(emailregex)]],
      'name': [null, Validators.required],
      'password': [null, [Validators.required]],
      'phone': [null, [Validators.required]],
    });    
  }

  onSubmit(data: any) {
    // update paremeter services
    console.log("Form incoming", data);
    let user = this.userService.register(data.email, data.name, data.password, data.phone);
    console.log("Created user", user);    
    this.router.navigate(['/home']);
  }  
}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

// For inspiration, you can look at https://stackblitz.com/edit/example-angular-material-reactive-form?file=app%2Fapp.component.html
@Component({
  selector: 'app-sign-up-form',
  templateUrl: './sign-up-form.component.html',
  styleUrls: ['./sign-up-form.component.scss']
})
export class SignUpFormComponent implements OnInit {

  formGroup: FormGroup;
  data: any;

  constructor(private formBuilder: FormBuilder) { 
  }

  ngOnInit() {
    // Construct the form using the injected FormBuilder
    const emailregex: RegExp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    this.formGroup = this.formBuilder.group({
      'email': [null, [Validators.required, Validators.pattern(emailregex)]],
      'name': [null, Validators.required],
      'password': [null, [Validators.required]]
    });    
    console.log(this.formGroup);
  }

  onSubmit(data) {
    this.data = data;
    console.log(this.data);
  }  
}

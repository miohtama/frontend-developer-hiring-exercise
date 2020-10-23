import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
import { User } from '../models';

// Jquery variable.
declare const $;

// For inspiration, you can look at https://stackblitz.com/edit/example-angular-material-reactive-form?file=app%2Fapp.component.html
@Component({
  selector: 'app-sign-up-form',
  templateUrl: './sign-up-form.component.html',
  styleUrls: ['./sign-up-form.component.scss']
})
export class SignUpFormComponent implements OnInit {

  private formGroup: FormGroup;

  // validation flags to display in/valid class to input.
  private pwValidada: boolean;
  private valid_name: boolean;
  private valid_email: boolean;
  private valid_code: boolean;
  private valid_phone: boolean;
  private valid_pw: boolean;

  // Event emitter to throw the user created to parent component.
  @Output() user_registered = new EventEmitter();

  constructor(private formBuilder: FormBuilder, private router: Router, private userService: UserService) {
  }

  ngOnInit() {

    this.pwValidada = false;

    // Construct the form using the injected FormBuilder
    const emailregex: RegExp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    this.formGroup = this.formBuilder.group({
      'email': ['', [Validators.required, Validators.pattern(emailregex)]],
      'name': ['', Validators.required],
      'password': ['', [Validators.required, Validators.minLength(6)]],
      'confirm_pw': ['', [Validators.required]],
      'country_code': [null, [Validators.required, Validators.pattern("^[0-9]*$"), Validators.maxLength(3), Validators.minLength(1)]],
      'phone_number': [null, [Validators.pattern("^[0-9]*$"), Validators.required, Validators.maxLength(12), Validators.minLength(8)]]
    }, {
        validator: this.mustMatch('password', 'confirm_pw')
      });

    // methods to check the validation of each input (valueChanges() method used).
    this.validateInputConfirmPw();
    this.validateInputName();
    this.validateInputCountryCode();
    this.validateInputEmail();
    this.validateInputPw()
    this.validateInputPhone();

  }

  // check match between pw and confirm-pw.
  mustMatch(controlName: string, matchingControlName: string) {

    return (formGroup: FormGroup) => {
      const control = formGroup.controls[controlName];
      const matchingControl = formGroup.controls[matchingControlName];

      if (matchingControl.errors && !matchingControl.errors.mustMatch) {
        // return if another validator has already found an error on the matchingControl
        return;
      }

      // set error on matchingControl if validation fails
      if (control.value !== matchingControl.value) {
        matchingControl.setErrors({ mustMatch: true });
      } else {
        matchingControl.setErrors(null);
      }
    }

  }

  repetirPw(pw1: string, pw2: string): boolean {
    //Para settear la bandera y darle clases a los input en caso de error o acierto al completar las pw.
    if (pw1 === '' || pw2 === '' || pw1 === ' ' || pw2 === ' ') {
      return false;
    } else if (pw1 === pw2) {
      return true;
    } else {
      return false;
    }
  }

  validateInputConfirmPw() {
    //Jugar con los input contraseña y confirmar contraseña.
    this.formGroup.get('confirm_pw').disable();

    this.formGroup.get('password').valueChanges
      .subscribe(() => {

        if (this.formGroup.get('password').value === '') {
          this.formGroup.get('confirm_pw').reset();
          this.formGroup.get('confirm_pw').disable();
        } else {
          this.formGroup.get('confirm_pw').enable();
          this.pwValidada = this.repetirPw(this.formGroup.get('confirm_pw').value, this.formGroup.get('password').value);
        }
      });

    this.formGroup.get('confirm_pw').valueChanges
      .subscribe(() => {
        this.pwValidada = this.repetirPw(this.formGroup.get('confirm_pw').value, this.formGroup.get('password').value);
      });
  }

  validateInputName() {

    this.formGroup.get('name').valueChanges
      .subscribe(() => {

        this.valid_name = this.formGroup.get('name').valid;

      });

  }

  validateInputCountryCode() {

    this.formGroup.get('country_code').valueChanges
      .subscribe(() => {

        this.valid_code = this.formGroup.get('country_code').valid;

      });

  }

  validateInputPhone() {

    this.formGroup.get('phone_number').valueChanges
      .subscribe(() => {

        this.valid_phone = this.formGroup.get('phone_number').valid;

      });

  }

  validateInputEmail() {

    this.formGroup.get('email').valueChanges
      .subscribe(() => {

        this.valid_email = this.formGroup.get('email').valid;

      });
  }

  validateInputPw() {

    this.formGroup.get('password').valueChanges
      .subscribe(() => {

        this.valid_pw = this.formGroup.get('password').valid;

      });

  }

  onSubmit(data: any) {

    let form_data: User = {
      email: data.email,
      name: data.name,
      password: data.password,
      phoneNumber: this.userService.setFormatPhone(Number(data.country_code), Number(data.phone_number))
    }

    this.userService.register(form_data)
      .then((user: User) => {

        // throw the event after success submit to the parent component to show the info by a toast.
        this.user_registered.emit(user);

      });

  }

}
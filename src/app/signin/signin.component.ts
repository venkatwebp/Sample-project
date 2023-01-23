import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserModel } from '../shared/user-model';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent {
  signinValue !: FormGroup;
  userObj : UserModel = new UserModel();
  submitted: boolean = false;
  logoutBtn: boolean = false;
  // isAvailable: boolean;
  // hidden: boolean;

  constructor(private formBuilder: FormBuilder){}

  ngOnInit() {
    this.signinValue = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.minLength(5), Validators.required]]
    })  
    
  }

  signIn(){
    this.submitted = true;
    this.userObj.email = this.signinValue.value.email;
    this.userObj.password = this.signinValue.value.password;
  }

  get validate(): {[key: string]: AbstractControl}{
    return this.signinValue.controls;
  }

}

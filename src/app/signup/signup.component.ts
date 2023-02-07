import { Component } from '@angular/core';
import { AbstractControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../shared/auth.service';
import { UserModel } from '../shared/user-model'

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  signinValue !: FormGroup;
  userObj : UserModel = new UserModel();
  submitted: boolean = false;
  logoutBtn: boolean = false;
  // isAvailable: boolean;
  // hidden: boolean;

  constructor(private formBuilder: FormBuilder, private auth: AuthService){}

  ngOnInit() {
    this.signinValue = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.minLength(5), Validators.required]]
    })  
    
  }

  signinWithGoogle(){
    this.auth.signingoogle();
  }

  signUp(){
    this.submitted = true;
    this.userObj.email = this.signinValue.value.email;
    this.userObj.password = this.signinValue.value.password;
    
    this.auth.signup(this.userObj.email, this.userObj.password);
    this.userObj.email = '';
    this.userObj.password = ''; 
  }

  get validate(): {[key: string]: AbstractControl}{
    return this.signinValue.controls;
  }
}

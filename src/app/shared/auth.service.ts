import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { GoogleAuthProvider } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private fireAuth: AngularFireAuth, private router: Router) { }
  
  //log in 
  login(email: string, password: string){
    this.fireAuth.signInWithEmailAndPassword(email, password).then( res => {
      if(res.user?.emailVerified == true){
        localStorage.setItem('token', 'true');
        this.router.navigate(['./courses']);
      }else{
        this.router.navigate(['./verify-email']);
      }
    }, err => {
      alert('something went wrong');
      this.router.navigate(['./signin']);
    })
  }

  //signup
  signup(email: string, password:string){
    this.fireAuth.createUserWithEmailAndPassword(email, password).then( res =>{
      alert('Registration Successful')
      this.router.navigate(['./signin']);
      this.sendEmailForVerification(res.user);
    }, err =>{
      alert("something went wrong");
      this.router.navigate(['./signup'])
    })
  }

  //signout
  signout(){
    this.fireAuth.signOut().then( () =>{
      localStorage.removeItem('token');
      this.router.navigate(['./signin']);
    }, err => {
      this.router.navigate(['./signup']);
    })
  };

  sendEmailForVerification(user: any){
    user.sendEmailForVerification().then( (res: any) =>{
      this.router.navigate(['./verify-email'])
    }, (err : any) => {
      alert("Something went wrong. Not able to send mail to your email.")
    })
  }

  //signingoogle
  signingoogle(){
    return this.fireAuth.signInWithPopup(new GoogleAuthProvider).then( res => {
      this.router.navigate(['./courses']);
      localStorage.setItem('token', JSON.stringify(res.user?.displayName));
      
    })
  }

}

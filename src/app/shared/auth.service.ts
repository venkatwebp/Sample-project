import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { FacebookAuthProvider, GoogleAuthProvider } from '@angular/fire/auth';
import { BehaviorSubject } from 'rxjs';
import { User } from './user.interface';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  // name = 'Ramaraj'
  // public userName = new BehaviorSubject<string>(this.name);
  // public logInStatus = new BehaviorSubject<boolean>(false);
  // public imagePath = new BehaviorSubject<string>('../../assets/images/blank-profile.png');

  public user = new BehaviorSubject<User>(<User><unknown>{
    displayName: 'Ram',
    emailVerified: 'false',
    photoURL: '../../assets/images/blank-profile.png'
  });

  // public url = 'http://universities.hipolabs.com/search?country=United+States';

  setUserList(val: any){
    this.user.next(val);
  }
  getUserList(){
    return this.user.asObservable();
  }

  constructor(private fireAuth: AngularFireAuth, 
    private router: Router,
    private http: HttpClient) { }

  // setLogInStatus(status: boolean){
  //   this.logInStatus.next(status);
  // }
  // getLogInStatus(){
  //   return this.logInStatus;
  // }

  // setUserName(val: string){
  //   this.userName.next(val)
  // }
  // getUserName(){
  //   return this.userName.asObservable();
  // }

  // setImage(img: string){
  //   this.imagePath.next(img);
  // }
  // getImage(){
  //   return this.imagePath.asObservable();
  // }
  
  //log in 
  login(email: string, password: string){
    this.fireAuth.signInWithEmailAndPassword(email, password).then( res => {
      if(res.user?.emailVerified == true){
        localStorage.setItem('user', JSON.stringify(res.user?.displayName));
        // this.setUserName(JSON.stringify(res.user.displayName));            
        // this.setImage(JSON.stringify(res.user.photoURL));
        // this.setLogInStatus(true); 


        this.setUserList(JSON.stringify(res.user));     
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
      localStorage.removeItem('user');
      // this.setLogInStatus(false);
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

  
  signinfacebook(){
    return this.fireAuth.signInWithPopup(new FacebookAuthProvider).then(res =>{
      console.log("Success");      
      this.router.navigate(['./courses']);
      localStorage.setItem('facebook', JSON.stringify(res.user?.email));
    }, err =>{
      console.log('Facebook Error', err)
    })
  }

  getUnivercityData(){
    return this.http.get('http://universities.hipolabs.com/search?country=United+States');   
  }

}

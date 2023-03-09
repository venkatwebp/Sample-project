import { Injectable, NgZone } from '@angular/core';
import * as auth from 'firebase/auth';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore, AngularFirestoreDocument} from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
import { FacebookAuthProvider, GoogleAuthProvider } from '@angular/fire/auth';
import { BehaviorSubject } from 'rxjs';
import { User } from './user.interface';
import { HttpClient } from '@angular/common/http';
import { getAuth, onAuthStateChanged } from 'firebase/auth';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  // name = 'Ramaraj'
  // public userName = new BehaviorSubject<string>(this.name);
  // public logInStatus = new BehaviorSubject<boolean>(false);
  // public imagePath = new BehaviorSubject<string>('../../assets/images/blank-profile.png');
  statusName: boolean = false;
  userData: any;

  public user = new BehaviorSubject<User>(<User><unknown>{
    displayName: 'Ram',
    emailVerified: 'false',
    photoURL: '././assets/images/blank-profile.png'
  });

  // public url = 'http://universities.hipolabs.com/search?country=United+States';

  setUserList(val: any){
    this.user.next(val);
  }
  getUserList(){
    return this.user.asObservable();
  }

  constructor(
    private afs: AngularFirestore,
    private fireAuth: AngularFireAuth, 
    private router: Router,
    private http: HttpClient,
    public ngZone: NgZone) { 

      this.fireAuth.authState.subscribe((user) =>{
        if(user){
          this.userData = user;
          localStorage.setItem('user', JSON.stringify(this.userData));
          JSON.parse(localStorage.getItem('user')!)
        }else{
          localStorage.setItem('user', 'null');
          JSON.parse(localStorage.getItem('user')!);
        }
      })

    }
  
  //log in 
  login(email: string, password: string){
    this.fireAuth.signInWithEmailAndPassword(email, password).then( res => {
      if(res.user?.emailVerified == true){
        localStorage.setItem('user', JSON.stringify(res.user?.displayName));


        this.setUserList(res.user);     
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
      this.statusName = true;
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
    return this.http.get('https://gorest.co.in/public/v2/users');   
  }

}

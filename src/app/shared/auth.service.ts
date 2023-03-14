import { Injectable, NgZone } from '@angular/core';
import * as auth from 'firebase/auth';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore, AngularFirestoreDocument} from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
import { FacebookAuthProvider, GoogleAuthProvider } from '@angular/fire/auth';
import { BehaviorSubject, Subject, tap } from 'rxjs';
import { User } from './user.interface';
import { HttpClient } from '@angular/common/http';
import { user_data } from './userdata.model';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  userData: any;
  
  userInfo = new Subject<user_data>();

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
          JSON.parse(localStorage.getItem('user')!);
          console.log(this.userData);
          
        }else{
          localStorage.setItem('user', 'null');
          JSON.parse(localStorage.getItem('user')!);
        }
      })

    }
  
  //log in 
  login(email: string, password: string){
    return this.fireAuth.signInWithEmailAndPassword(email, password)
    .then((result) => {
      this.SetUserData(result.user);
      console.log(result);
      this.fireAuth.authState.subscribe((user) =>{
        if(user){
          this.router.navigate(['./home']);
        }
      })
    })
    .catch((error) =>{
      window.alert(error.message);
    })
    // tap(res => {
    //   this.authenticatedUser(res.email, res.localId, res.idToken, res.expiresIn);
    // })
  }

  //signup
  signup(email: string, password:string){
    return this.fireAuth.createUserWithEmailAndPassword(email, password).then( (result) =>{
      this.sendEmailForVerification();
      this.SetUserData(result.user);
    }).catch((error) =>{
      window.alert(error.message)
    })
  }

  sendEmailForVerification(){
    return this.fireAuth.currentUser
    .then((u: any) => u.sendEmailForVerification())
    .then(() => {
      this.router.navigate(['verify-email-address'])
    })
  }

  SetUserData(user: any){
    const userRef: AngularFirestoreDocument<any> = this.afs.doc(
      'users/${user.uid}'
    );
    const userData: User = {
      uid: user.uid,
      email: user.email,
      displayName: user.displayName,
      photoURL: user.photoURL,
      emailVerified: user.emailVerified,
    }

    return userRef.set(userData, {
      merge: true
    })
  }

  //signout
  signout(){
    return this.fireAuth.signOut().then(() => {
      localStorage.removeItem('user');
      this.router.navigate(['./signin'])
    })
  };

  //signingoogle
  signingoogle(){
    return this.fireAuth.signInWithPopup(new GoogleAuthProvider).then( res => {
      this.router.navigate(['./home']);
      // localStorage.setItem('token', JSON.stringify(res.user?.displayName));
      this.SetUserData(res.user);
      
    })
  }

  
  signinfacebook(){
    return this.fireAuth.signInWithPopup(new FacebookAuthProvider).then(res =>{
      this.router.navigate(['./home']);
      this.SetUserData(res.user);
      // localStorage.setItem('facebook', JSON.stringify(res.user?.email));
    }, err =>{
      console.log('Facebook Error', err)
    })
  }

  getUnivercityData(){
    return this.http.get('https://gorest.co.in/public/v2/users');   
  }

  get isLoggedIn(): boolean{
    const user = JSON.parse(localStorage.getItem('user')!);
    return (user !== null && user.emailVerified !== false) ? true : false;
  }

  private authenticatedUser(email: any, userId: any, token: any, expiresIn: number){
    const expirationDate = new Date(new Date().getTime() + expiresIn * 1000);
    const user = new user_data(email, userId, token, expirationDate);

    this.userInfo.next(user);
  }

}

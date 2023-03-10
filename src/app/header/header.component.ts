import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../shared/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public title: Observable<string> | undefined;

  isLoggedIn: boolean = false;
  profile: any;

  userName: any;
  logStatus: boolean = false;
  imagePath: string = '././assets/images/blank-profile.png';
  users: any;
  statusName: boolean =false;
  

  constructor(private router: Router, public auth: AuthService){}

  ngOnInit(){
    // this.title = this.auth.getUserName();
    // this.auth.getLogInStatus().subscribe(res =>{
    //   this.isLoggedIn = res;
    // });

    // this.auth.getImage().subscribe(res => {
    //   this.profile = res.replace(/['"]+/g, '');
    // })

    console.log(this.auth.isLoggedIn);
    

    this.auth.getUserList().subscribe((res: any) =>{
      console.log(res);
      this.users = res;
        // this.users = JSON.parse(res);
        console.log(this.users);
        
        
        this.userName = this.users.displayName;
        // this.logStatus = this.users.emailVerified;
        this.imagePath = this.users.photoURL;

        if(this.userName != 'Ram'){
          this.logStatus = true;
        }
          
    })

  }

  signin(){
    this.router.navigate(['/signin']);
  }
  signOut(){
    this.auth.signout();
    this.router.navigate(['./signin']);
    this.statusName = true;
      // if(!localStorage.getItem('user')){
      //   console.log(localStorage.getItem('user'));
      // }
    
  }
}

import { Component, OnInit } from '@angular/core';
import { AuthService } from '../shared/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  title: any = 'Ram';
  titleText: any;
  user: any;

  constructor(public auth: AuthService){}

  services = [
    {
      icon: 'grid_view',
      title: 'UI UX Design',
      content: 'Join Indias Best UI/UX Program | Learn From Top Industry Experts | Certified In UI/UX. Master the UI/UX | Work on Live Projects | Build OTT UI, Ecommerce UI and Lot More.'
    },
    {
      icon: 'web',
      title: 'Web Development',
      content: 'Join Indias Best UI/UX Program | Learn From Top Industry Experts | Certified In UI/UX. Master the UI/UX | Work on Live Projects | Build OTT UI, Ecommerce UI and Lot More.'
    },
    {
      icon: 'app_registration',
      title: 'App Development',
      content: 'Join Indias Best UI/UX Program | Learn From Top Industry Experts | Certified In UI/UX. Master the UI/UX | Work on Live Projects | Build OTT UI, Ecommerce UI and Lot More.'
    }
]

  ngOnInit(){
    // this.title = this.auth.getUserName();
    this.auth.getUserList().subscribe((res:any) =>{
      this.user = res;
      this.title = this.user.displayName;
      
    })
  
  }
}

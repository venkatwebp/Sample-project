import { Component } from '@angular/core';
import { AuthService } from '../shared/auth.service';

@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.component.html',
  styleUrls: ['./aboutus.component.css']
})
export class AboutusComponent {
  title: any;

  constructor( private auth: AuthService){}

  tutors = [
    {
      imgPath: './assets/images/tutor1.jpg',
      name: 'Mia Adam',
      designation: 'Founder & CEO'
    },
    {
      imgPath: './assets/images/tutor2.jpg',
      name: 'Mia Adam',
      designation: 'Founder & CEO'
    },
    {
      imgPath: './assets/images/tutor3.jpg',
      name: 'Mia Adam',
      designation: 'Founder & CEO'
    },
    {
      imgPath: './assets/images/pic4.jpg',
      name: 'Jaffery Goodwin',
      designation: 'Senior Manager'
    }
  ]

  ngOnInit(){
    // this.title = this.auth.getUserName();
    this.auth.getUserList().subscribe(res =>{
      this.title = res.displayName;
    })

  }

}

import { AfterViewInit, Component, ElementRef, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { AuthService } from '../shared/auth.service';

@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.component.html',
  styleUrls: ['./aboutus.component.css']
})
export class AboutusComponent implements OnInit, AfterViewInit {
  title: any;
  // @ViewChild('abouthead')marker: ElementRef;
  @ViewChildren('abouthead')marker: QueryList<any>;

  constructor( public auth: AuthService){}

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
    });  

    // for(let i = 0; i < 5; i++){
    //   var btn = document.createElement('button');
    //   btn.appendChild(document.createTextNode('Button ' + i));
    //   btn.addEventListener('click', function(){console.log(i);})
    //   document.body.appendChild(btn);
    // }

  }

  ngAfterViewInit() {
    console.log(this.marker);
    this.marker.first.nativeElement.style.color = '#015abd';
    this.marker.last.nativeElement.style.color = '#015abd';
    
    // this.marker.nativeElement.style.color = 'red';
  }

}

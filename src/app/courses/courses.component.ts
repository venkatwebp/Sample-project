import { Component, OnInit } from '@angular/core';
import { CommonService } from '../shared/common.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {
  courses: any;


  constructor(private service: CommonService){}

  ngOnInit(){
    this.courses = this.service.courses;
    console.log(this.courses);
    
  }

}

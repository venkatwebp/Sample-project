import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { CommonService } from '../shared/common.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class CoursesComponent implements OnInit {
  courses: any;

  constructor(private service: CommonService){}

  ngOnInit(){
    this.courses = this.service.courses;
  }

  getTotalCourses(){
    return this.courses.length;
  }

  getFreeCourses(){
    return this.courses.filter((course: { type: string}) => course.type == 'free').length;
  }

  getPremiumCourse(){
    return this.courses.filter((course: { type: string; }) => course.type == 'premium').length;
  }

  onFilterButtonValue: string = 'all';
  onFIlterButtonValueChanges(data: any){
    this.onFilterButtonValue = data;
  }

}

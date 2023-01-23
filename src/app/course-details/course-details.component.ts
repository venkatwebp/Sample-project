import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonService } from '../shared/common.service';

@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.css']
})
export class CourseDetailsComponent implements OnInit {

  currentCourse: any;
  currentCourseId: any;

  constructor(private common: CommonService, private activeRoute: ActivatedRoute){}

  ngOnInit(){
    this.currentCourseId = this.activeRoute.snapshot.paramMap.get('id');
    this.currentCourse = this.common.courses.find(x => x.id == this.currentCourseId);
    console.log(this.currentCourseId);
    
  }

}

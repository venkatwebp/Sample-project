import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CourseDetailsComponent } from './course-details/course-details.component';
import { CoursesComponent } from './courses/courses.component';
import { SigninComponent } from './signin/signin.component';

const routes: Routes = [
  {path: '', component: SigninComponent},
  {path: 'courses', component: CoursesComponent},
  {path: 'courses/course-details/:id', component: CourseDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

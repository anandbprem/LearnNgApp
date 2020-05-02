import { Course } from './model/course';
import { COURSES } from './../db-data';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'LearnNgApp';

  courses = COURSES;

  onCourseSelected(course: Course){
    console.log("App Component");
    console.log("click Event Bubbled");
  }
}

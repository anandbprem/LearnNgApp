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
  
  // The below variables are used for learning pipes
  startDate = new Date(2000, 0, 1);
  titleCourse = COURSES[1].description;
  price = 9.99234345;
  // Percent pipe will multiply by 100 by default
  rate =0.67;
  // used to display the key value pairs 
  firstCourse = COURSES[1];

  onCourseSelected(course: Course) {
    console.log('App Component');
    console.log('click Event Bubbled');
  }
}

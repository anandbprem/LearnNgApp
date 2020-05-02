import { Course } from './../model/course';
import { COURSES } from './../../db-data';
import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.css']
})
export class CourseCardComponent implements OnInit {

  // @Input()
  // title: string;
  @Input()
  course: Course;
  courses;
  // coreCourse = COURSES[0];
  @Output()
  courseSelected = new EventEmitter<Course>();
  constructor() { }

  ngOnInit(): void {
  }

  onCourseViewed(param){
    console.log('Course Card');
    console.log(JSON.stringify(param));
    this.courseSelected.emit(this.course);
  }
}

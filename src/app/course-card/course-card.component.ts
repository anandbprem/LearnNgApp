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

  @Input()
  cardIndex: number;

  ngOnInit(): void {
  }

  isImageVisible(){
    return this.course && this.course.iconUrl;
  }

  onCourseViewed(param){
    console.log('Course Card');
    console.log(JSON.stringify(param));
    this.courseSelected.emit(this.course);
  }

  ///
  /// ngClass is used when we need to apply styles for HTML template
  /// DEPENDING on the content of the data.
  ///
  
  cardClasses(){
    // return {
    //   'beginner' : false,
    //   'course-card': true
    // };

    // return {
    //   beginner : this.course.category === 'BEGINNER'
    // };

    if(this.course.category === 'BEGINNER'){
      return ['beginner'];
    }
  }
  
  cardStyles(){
    return {
      'text-decoration': 'underline'
    };
  }
}

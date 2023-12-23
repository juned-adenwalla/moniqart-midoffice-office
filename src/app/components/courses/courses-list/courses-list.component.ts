import { Component } from '@angular/core';
let CourseConfig = require('../../../../../../configs/courses.config.js');
let LessonConfig = require('../../../../../../configs/lesson.config.js');

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.css']
})
export class CoursesListComponent {
  view: any='courses';
  courseconfig = CourseConfig.config;
  lessonconfig = LessonConfig.config;
  changeTab(tab:any){
    this.view = tab;
  }
}

import { Component } from '@angular/core';
let Config = require('../../../../../../configs/lesson.config.js');

@Component({
  selector: 'app-lesson-view',
  templateUrl: './lesson-view.component.html',
  styleUrls: ['./lesson-view.component.css']
})
export class LessonViewComponent {
  config = Config.config;
}

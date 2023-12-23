import { Component } from '@angular/core';
let Config = require('../../../../../../configs/courses.config.js');

@Component({
  selector: 'app-courses-view',
  templateUrl: './courses-view.component.html',
  styleUrls: ['./courses-view.component.css']
})
export class CoursesViewComponent {
  config = Config.config;
}

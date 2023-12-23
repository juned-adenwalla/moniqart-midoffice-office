import { Component } from '@angular/core';
let Config = require('../../../../../../configs/blogs.config.js');

@Component({
  selector: 'app-blog-view',
  templateUrl: './blog-view.component.html',
  styleUrls: ['./blog-view.component.css']
})
export class BlogViewComponent {
  config = Config.config;
}

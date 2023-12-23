import { Component } from '@angular/core';
let Config = require('../../../../../../configs/blogs.config.js');

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.css']
})
export class BlogListComponent {
  config = Config.config;
}

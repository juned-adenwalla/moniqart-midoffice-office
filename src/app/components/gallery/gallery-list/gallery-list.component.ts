import { Component } from '@angular/core';
let Config = require('../../../../../../configs/gallery.config.js');

@Component({
  selector: 'app-gallery-list',
  templateUrl: './gallery-list.component.html',
  styleUrls: ['./gallery-list.component.css']
})
export class GalleryListComponent {
  config:any = Config.config;
}

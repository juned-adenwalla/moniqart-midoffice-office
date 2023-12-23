import { Component } from '@angular/core';
let Config = require('../../../../../../configs/gallery.config.js');

@Component({
  selector: 'app-gallery-form',
  templateUrl: './gallery-form.component.html',
  styleUrls: ['./gallery-form.component.css']
})
export class GalleryFormComponent {
  config:any = Config.config;
}

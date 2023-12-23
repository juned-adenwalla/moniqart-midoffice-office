import { Component } from '@angular/core';
let Config = require('../../../../../../configs/products.config.js');

@Component({
  selector: 'app-product-view',
  templateUrl: './product-view.component.html',
  styleUrls: ['./product-view.component.css']
})
export class ProductViewComponent {
  config:any = Config.config;
}

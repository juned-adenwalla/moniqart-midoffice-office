import { Component } from '@angular/core';
let Config = require('../../../../../../configs/users.config.js');

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent {
  config = Config.config;
}

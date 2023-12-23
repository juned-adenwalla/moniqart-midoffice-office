import { Component } from '@angular/core';
let SiteConfig = require('../../../../../configs/siteconfig.config.js');
let PgConfig = require('../../../../../configs/pgconfig.config.js');
let SmsConfig = require('../../../../../configs/smsconfig.config.js');
let EmailConfig = require('../../../../../configs/emailconfig.config.js');
let TempConfig = require('../../../../../configs/emailtemplates.config.js');

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent {
  view:any = "site";
  siteconfig = SiteConfig.config;
  pgconfig = PgConfig.config;
  emailconfig = EmailConfig.config;
  smsconfig = SmsConfig.config;
  tempconfig = TempConfig.config;

  changeTab(tab:any){
    this.view = tab;
  }
}

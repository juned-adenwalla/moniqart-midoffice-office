import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { forkJoin } from 'rxjs';
import { BaseService } from 'src/app/services/base.service';
let TransConfig = require('../../../../../configs/transaction.config.js');
let OrderConfig = require('../../../../../configs/orders.config.js');

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  count: any;
  view:any = 'transaction';
  tansconfig = TransConfig.config;
  orderconfig = OrderConfig.config;
  userdata: any;
  constructor(private baseService:BaseService,private router: Router) { }

  ngOnInit() {
    this.userdata = localStorage.getItem('userdata');
    this.userdata = JSON.parse(this.userdata);
    console.log(this.userdata)
    this.initFunction();
  }

  initFunction(){
    const counts = this.baseService.get('/api/midoffice/dashboard/cards',{});
    forkJoin([counts]).subscribe((res:any)=>{
      console.log('res:',res)
      if(res[0] && res[0]["status"]){
        this.count = res[0]["data"];
      }
    });
  }

  userLogout(){
    localStorage.clear();
    this.router.navigate(['/login']);
  }

  changeTab(tab:any){
    this.view = tab;
  }

}

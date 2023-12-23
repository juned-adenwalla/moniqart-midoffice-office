import { Component } from '@angular/core';
import { BaseService } from 'src/app/services/base.service';
import { environment } from 'src/app/environments/environments';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  sitedata: any;
  baseurl = environment.baseurl;
  constructor(private baseService:BaseService) { }

  ngOnInit() {
    this.initFunction();
  }

  initFunction(){
    this.baseService.get('/api/midoffice/list/collection/' + "tblsiteconfig",{filter:"_id",value:1}).subscribe((res:any)=>{
      if(res["status"]){
        this.sitedata = res["data"][0];
        console.log(this.sitedata)
      }
    })
  }

}

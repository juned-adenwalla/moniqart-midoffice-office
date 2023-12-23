import { Component, Input } from '@angular/core';
import { BaseService } from 'src/app/services/base.service';
import { Router, ActivatedRoute } from '@angular/router';
import * as XLSX from 'xlsx';
import { forkJoin } from 'rxjs';
import Swal from 'sweetalert2';
import { environment } from 'src/app/environments/environments';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  @Input() config:any;
  pagenumber: any = 1;
  pagelimit: any = 80000;
  sortby: any = "_id";
  sorttype: any = "DESC";
  searchby: any = '';
  listdata: any;
  fileName= 'table-data.xlsx'; 
  searchvalue: any = '';
  p: number = 1;
  count: any;
  formdata: any = {_id:"",status:""};
  baseurl = environment.baseurl;
  isLoading = true;
  constructor(private baseService:BaseService,private router:Router,private route: ActivatedRoute) { }

  ngOnInit() {
    console.log('Input:',this.config);
    this.initFunction('_id');
  }

  initFunction(searchby:any){
    let header = {
      "pagenumber": this.pagenumber,
      "pagelimit": this.pagelimit,
      "sortby": this.sortby,
      "sorttype": this.sorttype,
      "searchby": searchby,
      "searchvalue": this.searchvalue,
      "collection": this.config.collection
    }
    const data = this.baseService.get('/api/midoffice/list/all-data',header);
    const counts = this.baseService.get('/api/midoffice/item/counts/' + this.config.collection,{});
    forkJoin([data,counts]).subscribe((res:any)=>{
      console.log('res:',res)
      if(res[0] && res[0]["status"]){
        this.listdata = res[0]["data"];
      }
      if(res[1] && res[1]["status"]){
        console.log('counts:',res[1]["data"])
        this.count = res[1]["data"];
      }
      this.isLoading = false
    });
  }

  editRecord(id:any){
    this.router.navigate([this.config.editroute + id],{relativeTo: this.route})
  }

  addClick(){
    this.router.navigate([this.config.addroute],{relativeTo: this.route})
  }

  exportToCsv(){
    /* table id is passed over here */   
    let element = document.getElementById('excel-table'); 
    const ws: XLSX.WorkSheet =XLSX.utils.table_to_sheet(element);

    /* generate workbook and add the worksheet */
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');

    /* save to file */
    XLSX.writeFile(wb, this.fileName);
  }

  saveData(collection:any,id:any,status:any){
    console.log('Collection:',collection)
    this.formdata["_id"] = id;
    this.formdata["status"] = status;
    const input = this.formdata;
    const columns = [];
    const values = [];
    
    for (const property in input) {
      if (input.hasOwnProperty(property)) {
        columns.push(property);
        values.push(input[property]);
      }
    }
    
    const output = {
      columns: columns,
      values: values
    };
    this.baseService.post('/api/midoffice/item/save/' + collection,output,{}).subscribe((res:any)=>{
      if(res["status"]){
        Swal.fire("Success","Data Updated Successfully :)","success");
        this.initFunction('_id');
      }else{
        Swal.fire("Failed","Something Went Wrong","warning");
      }
    });
  }

  editUser(route:any){
    this.router.navigate([`/edit-user/${route}`]);
  }

}

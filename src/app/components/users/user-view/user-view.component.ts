import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BaseService } from 'src/app/services/base.service';
let Config = require('../../../../../../configs/users.config.js');
import Swal from 'sweetalert2';

@Component({
  selector: 'app-user-view',
  templateUrl: './user-view.component.html',
  styleUrls: ['./user-view.component.css']
})
export class UserViewComponent {
  config = Config.config;
  view:any;
  paramid: any;
  transactions: any;
  usercourses: any;
  formdata: any = {_id:"",status:""};
  orders: any;
  orderdetail: any = {};
  orderderditem: any;
  products: any;
  viewcourse: any = false;
  constructor(private baseService:BaseService,private router:Router,private route: ActivatedRoute) {
    const param = this.route.params.subscribe((res:any)=>{
      this.paramid = res.id
    })
  }

  ngOnInit() {
    this.view = "profile";
    if(this.paramid){
      this.getTransaction();
      this.getCourses();
      this.getOrders();
      this.getProducts();
    }
  }

  getProducts(){
    this.baseService.get('/api/midoffice/list/collection/tblproducts',{filter:"status",value:1}).subscribe((res:any)=>{
      if(res['status']){
        this.products = res['data'];
      }
    })
  }

  getTransaction(){
    var header = {
      "filter": "userid",
      "value": this.paramid
    }
    this.baseService.get('/api/midoffice/list/collection/tbltransactions',header).subscribe((res:any)=>{
      if(res["status"]){
        this.transactions = res["data"];
      }
    });
  }

  getCourses(){
    var header = {
      "filter": "userid",
      "value": this.paramid
    }
    this.baseService.get('/api/midoffice/list/collection/tblusercourses',header).subscribe((res:any)=>{
      if(res["status"]){
        this.usercourses = res["data"];
      }
    });
  }


  getOrders(){
    var header = {
      "filter": "userid",
      "value": this.paramid
    }
    this.baseService.get('/api/midoffice/list/collection/tblorders',header).subscribe((res:any)=>{
      if(res["status"]){
        this.orders = res["data"];
      }
    });
  }

  changeTab(tab:any){
    this.view = tab;
  }

  backToList(){
    this.router.navigate([this.config.manageroute],{relativeTo: this.route})
  }

  saveData(collection:any,id:any,status:any){
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
        this.getCourses();
        this.getTransaction();
      }else{
        Swal.fire("Failed","Something Went Wrong","warning");
      }
    });
  }

  getOrderData(id:any){
    if(id){
      this.viewcourse = true;
      this.baseService.get('/api/base/list/collection/tblorders',{filter:"_id",value:id}).subscribe((res:any)=>{
        if(res['status']){
          this.orderdetail = res['data'][0];
          this.orderderditem = this.orderdetail?.productid;
          this.orderderditem = JSON.parse(this.orderderditem);
        }
      })
    }
  }

  productById(idToFind: number): any | undefined {
    console.log('products:',idToFind, this.products)
    return this.products.filter((item:any) => item._id == idToFind);
  }

  sendMail(type:any,id:any){
    if(type == 'trans'){
      this.baseService.post('/api/email/transaction/' + id,{},{}).subscribe((res:any)=>{
        if(res['status']){
          Swal.fire("Success","Mail Sent Successfully :)","success");
        }else{
          Swal.fire("Failed","Something Went Wrong","warning");
        }
      });
    }
    if(type == 'course'){
      this.baseService.post('/api/email/course/' + id,{},{}).subscribe((res:any)=>{
        if(res['status']){
          Swal.fire("Success","Mail Sent Successfully :)","success");
        }else{
          Swal.fire("Failed","Something Went Wrong","warning");
        }
      });
    }
    if(type == 'order'){
      this.baseService.post('/api/email/purchase/' + id,{},{}).subscribe((res:any)=>{
        if(res['status']){
          Swal.fire("Success","Mail Sent Successfully :)","success");
        }else{
          Swal.fire("Failed","Something Went Wrong","warning");
        }
      });
    }
  }
}

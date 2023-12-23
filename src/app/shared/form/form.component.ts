import { Component, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { BaseService } from 'src/app/services/base.service';
import { ChangeDetectorRef } from '@angular/core';
import { forkJoin } from 'rxjs';
import { HttpEvent, HttpEventType } from '@angular/common/http';
import Swal from 'sweetalert2';
import { environment } from 'src/app/environments/environments';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  @Input() config:any;
  isLoading = true;
  paramid: any;
  formdata:any = {};
  dropdown:any;
  progress: any;
  categories: any;
  trainers: any;
  subcategories: any;
  courses: any;
  warning: any = {};
  submitted: any = false;
  membership: any;
  baseurl = environment.baseurl;
  country: any;
  constructor(private router:Router,private route: ActivatedRoute,private baseService:BaseService,private cd:ChangeDetectorRef) {
    const param = this.route.params.subscribe((res:any)=>{
      this.paramid = res.id
    });
  }

  ngOnInit() {
    if(this.config.name == 'emailconfig' || this.config.name == 'siteconfig' || this.config.name == 'pgconfig' || this.config.name == 'smsconfig' || this.config.name == 'emailtemplates'){
      this.paramid = 1;
    }
    this.initFunction();
    this.validate()
  }

  initFunction(){
    this.isLoading = true
    if(this.paramid){
      let header = {
        "collection": this.config.collection,
        "param": this.config.param
      }
      const data = this.baseService.get('/api/midoffice/item/' + this.paramid,header);
      const category = this.baseService.get('/api/midoffice/list/collection/' + "tblcategories",{filter:"status",value:1});
      const trainer = this.baseService.get('/api/midoffice/list/collection/' + "tblusers",{filter:"usertype",value:"trainer"});
      const courses = this.baseService.get('/api/midoffice/list/collection/' + "tblcourses",{filter:"status",value:1});
      const membership = this.baseService.get('/api/midoffice/list/collection/' + "tblsubscription",{filter:"status",value:1});
      forkJoin([data,category,trainer,courses,membership]).subscribe((res:any)=>{
        
        if(res[0] && res[0]["status"]){
          this.formdata = res[0]["data"][0];
          this.cd.detectChanges();
        }
        if(res[1] && res[1]["status"]){
          this.categories = res[1]["data"];
          console.log(this.categories)
          this.subcategories = res[1]["data"];
          this.cd.detectChanges();
        }
        if(res[2] && res[2]["status"]){
          this.trainers = res[2]["data"];
          this.cd.detectChanges();
        }
        if(res[3] && res[3]["status"]){
          this.courses = res[3]["data"];
          this.isLoading = false
          this.cd.detectChanges();
        }
        if(res[4] && res[4]["status"]){
          this.membership = res[4]["data"];
          this.cd.detectChanges();
        }
        this.isLoading = false
      });
    }else{
      const category = this.baseService.get('/api/midoffice/list/collection/' + "tblcategories",{filter:"status",value:1});
      const trainer = this.baseService.get('/api/midoffice/list/collection/' + "tblusers",{filter:"usertype",value:"trainer"});
      const courses = this.baseService.get('/api/midoffice/list/collection/' + "tblcourses",{filter:"status",value:1});
      const membership = this.baseService.get('/api/midoffice/list/collection/' + "tblsubscription",{filter:"status",value:1});
      const country = this.baseService.get('/api/midoffice/list/collection/' + "tblcountry",{filter:"status",value:1});
      forkJoin([category,trainer,courses,membership,country]).subscribe((res:any)=>{
        if(res[0] && res[0]["status"]){
          this.categories = res[0]["data"];
          this.subcategories = res[0]["data"];
          this.cd.detectChanges();
        }
        if(res[1] && res[1]["status"]){
          this.trainers = res[1]["data"];
          this.cd.detectChanges();
        }
        if(res[2] && res[2]["status"]){
          this.courses = res[2]["data"];
          this.cd.detectChanges();
        }
        if(res[3] && res[3]["status"]){
          this.membership = res[3]["data"];
          this.cd.detectChanges();
        }
        if(res[4] && res[4]["status"]){
          this.country = res[4]["data"];
          this.cd.detectChanges();
        }
        this.isLoading = false;
      });
      this.formdata = {};
    }
  }

  getSubCategory(filter:any,value:any){
    var header = {
      "filter": filter,
      "value": value
    }
    this.baseService.get('/api/midoffice/list/collection/tblcategories',header).subscribe((res:any)=>{
      if(res["status"]){
        this.subcategories = res["data"];
      }
    });
  }

  uploadFiles(event:any,input:any){
    const file = event.target.files[0];
    this.baseService.fileUpload(this.config.folder, file).subscribe((res: HttpEvent<any>) => {
      if (res.type === HttpEventType.UploadProgress && res.total) { // Check 'type' property and 'total' existence
        // Calculate the upload progress percentage
        this.progress = Math.round(res.loaded / res.total * 100);
        console.log(`Upload Progress: ${this.progress}%`);
      } else if (res.type === HttpEventType.Response) { // Check 'type' property
        const responseBody = res.body;
        console.log('Response Body:', responseBody.file_path);

        if (responseBody) {
          // Assuming responseBody is an object, you can access its properties here
          this.formdata[input] = responseBody.file_path;
          this.cd.detectChanges();
        }
      }
    });
  }

  saveData(){
    this.submitted = true
    console.log(this.formdata)
    const input = this.formdata;
  
    const columns = [];
    const values = [];
    
    for (const property in input) {
      if (input.hasOwnProperty(property)) {
        columns.push(property);
        if(property == 'services' && this.config.name == 'subscription'){
          values.push(JSON.stringify(input[property]));
        }else{
          values.push(input[property]);
        }
      }
    }
    
    const output = {
      columns: columns,
      values: values
    };
    console.log('validate:',this.validate())
    if(this.validate()){
      this.baseService.post('/api/midoffice/item/save/' + this.config.collection,output,{}).subscribe((res:any)=>{
        if(res["status"]){
          Swal.fire("Success","Data Updated Successfully :)","success");
        }else{
          Swal.fire("Failed","Something Went Wrong","warning");
        }
      });
    }
  }

  selectOption(event:any){
    this.formdata[event] = JSON.stringify(this.formdata[event])
    console.log(this.formdata[event])
  }

  validate(){
    // Iterate through form fields and check for missing required fields
    for (const key of Object.keys(this.config.form_fields)) {
      const field = this.config.form_fields[key];
      if (field.isrequired && !this.formdata[field.name]) {
        this.warning[field.name] = true;
      }else{
        this.warning[field.name] = false;
      }
    }

    if(Object.values(this.warning).some(value => value === true)){
      return false;
    }else{
      return true;
    }
  }

  backToList(){
    this.router.navigate([this.config.manageroute],{relativeTo: this.route})
  }
}

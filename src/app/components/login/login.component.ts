import { ChangeDetectorRef, Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  formdata:any = {useremail:"",password:""};
  constructor(private authService:AuthService,private cd:ChangeDetectorRef,private router: Router) {}

  userSignin(){
    this.authService.login(this.formdata).subscribe((res:any)=>{
      if(res["status"]){
        if(res?.user?.usertype != 'admin'){
          Swal.fire("Failed","Not Authorised","warning");
        }else{
          localStorage.setItem('access_token', res.token);
          localStorage.setItem('userdata', JSON.stringify(res.user));
          this.router.navigate(['/']);
        }
      }else{
        Swal.fire("Failed",res["message"],"warning");
      }
      console.log('res:',res)
    })
  }
}

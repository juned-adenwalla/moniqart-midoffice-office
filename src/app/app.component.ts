import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'midoffice';

  userIsLogged(){
    if(localStorage.getItem('userdata')){
      return true;
    }else{
      return false;
    }
  }
}

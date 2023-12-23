import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { environment } from '../environments/environments';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  API_URL = environment.baseurl;
  constructor(private http: HttpClient) {}

  public login(body:any){
    var headers:any = headers || {};
    return this.http.post(this.API_URL + '/api/auth/login', body, {headers: headers});
  }
}

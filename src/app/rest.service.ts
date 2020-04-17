import { Injectable } from '@angular/core';
import { Observable} from 'rxjs';
import {  Router } from '@angular/router';
import { Register, Login,ForgotPassword } from '../app/Model/class';
import { HttpClient, HttpHeaders, HttpErrorResponse, HttpRequest,HttpEvent } from '@angular/common/http';

const endpoint = 'http://localhost:8080/';
const agentid=1;

@Injectable({
  providedIn: 'root'
})
export class RestService {
  httpOptions:any;

  constructor(private http: HttpClient, private myRoute: Router) { }
  private extractData(res: Response) {
    let body = res;
    return body || { };
 }
 sendToken(token: string) {
  //alert(token);
  localStorage.setItem("LoggedInUser", token)
 }

 getToken() {
  //localStorage.removeItem("LoggedInUser");

  return localStorage.getItem("LoggedInUser");
}
isLoggednIn() {  
  return this.getToken() !== null;
}


sendRole(role){
  localStorage.setItem("LoggedInRole", role)
}
getRole(){
  return localStorage.getItem("LoggedInRole");
}
sendId(id){
  localStorage.setItem("LoggedInUserId", id)
}
getId(){
  return localStorage.getItem("LoggedInUserId");
}

logout() {
  localStorage.removeItem("LoggedInUser");
  localStorage.removeItem("LoggedInUserId");
  localStorage.removeItem("LoggedInRole");
  this.myRoute.navigate[('/userdashboard')];

}   



 Register(data: Register): Observable<any> {
  this.httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'     
        })          
  };
    return this.http.post<Register>(endpoint + 'api/auth/signup' , data,this.httpOptions);
 }

 

  login(data: Login): Observable<any> {
  this.httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
     // x-access-token: 'access_token'+this.getToken()
        })          
  };
    return this.http.post<Login>(endpoint + 'api/auth/signin' , data,this.httpOptions); 
 }

 forgot(data:ForgotPassword): Observable<any>{
  this.httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
     
        })
  };
  return this.http.put<any>(endpoint + 'api/updatepass',data, this.httpOptions);
}

userprofile(): Observable<any> {
  this.httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'x-access-token': this.getToken()
        })
  };

  return this.http.get<any>(endpoint + 'api/userview', this.httpOptions);
}
 
}

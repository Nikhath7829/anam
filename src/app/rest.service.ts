import { Injectable } from '@angular/core';
import { Observable} from 'rxjs';
import {  Router } from '@angular/router';
import { Register, Login,Forgot ,Product,AddtoCart, PostAdd} from '../app/Model/class';
import { HttpClient, HttpHeaders, HttpErrorResponse, HttpRequest,HttpEvent } from '@angular/common/http';

// const endpoint = 'http://ec2-18-141-240-226.ap-southeast-1.compute.amazonaws.com:3000/';
   const endpoint = 'http://localhost:8080/'
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
  localStorage.removeItem("productId");
  localStorage.removeItem("name");
  localStorage.removeItem("price");
  localStorage.removeItem("image");
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
 //Upadate New password

 forgot(data:Forgot): Observable<any>{
  this.httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
 })
  };
  return this.http.put<any>(endpoint + 'api/UpdateNewPassword' ,data, this.httpOptions);
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
 //View All Users
getuserlist(): Observable<any> {
  this.httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'x-access-token': this.getToken()
        })
  };
  //const myheader=new HttpHeaders().set('AUTH_TOKEN', auth);
 // return this.http.get<any>(this.ADD_CART_API+product.productid,{headers:myheader});

  return this.http.get<any>(endpoint + 'api/userList', this.httpOptions);
}



removefromlist(id){
  this.httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'x-access-token': this.getToken()
        })
  };
  return this.http.delete<Register>(endpoint + 'api/destroyUser/'+id, this.httpOptions);
}


//Admin Upload Product to UserDashboard

addProduct(data: Product): Observable<any> {
  this.httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
     'x-access-token': this.getToken()
        })          
  };
    return this.http.post<Product>(endpoint + 'api/product/admin' , data,this.httpOptions); 
 }
 productid(): Observable<any> {
  this.httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'x-access-token': this.getToken()
        })
  };
  //const myheader=new HttpHeaders().set('AUTH_TOKEN', auth);
 // return this.http.get<any>(this.ADD_CART_API+product.productid,{headers:myheader});

  return this.http.get<any>(endpoint + 'api/productid', this.httpOptions);
}


 getproduct(): Observable<any> {
  this.httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'x-access-token': this.getToken()
        })
  };
  //const myheader=new HttpHeaders().set('AUTH_TOKEN', auth);
 // return this.http.get<any>(this.ADD_CART_API+product.productid,{headers:myheader});

  return this.http.get<any>(endpoint + 'api/dashproductList', this.httpOptions);
} 

getAds(): Observable<any> {
  this.httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'x-access-token': this.getToken()
        })
  };
  return this.http.get<any>(endpoint + 'api/adslist', this.httpOptions);
}



productname(): Observable<any>{
  this.httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'  ,
      'x-access-token': this.getToken() 
        })          
  };
 return this.http.get<any>(endpoint + 'api/getAllProducts', this.httpOptions);
 
 }

 
 

 getProduct(id){
  this.httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'x-access-token': this.getToken()
        })
  };
  return this.http.get<any>(endpoint + 'api/productdetails/'+id, this.httpOptions);
}



 pushFileToStorage(file: File): Observable<HttpEvent<{}>> {
  const formdata: FormData = new FormData();

  formdata.append('file', file);

  const req = new HttpRequest('POST', 'http://ec2-18-141-240-226.ap-southeast-1.compute.amazonaws.com:3000/api/file/profile', formdata, {
    reportProgress: true,
    responseType: 'text'
  });
return this.http.request(req);
}

 pushfileproducts(file: File): Observable<HttpEvent<{}>> {
  const formdata: FormData = new FormData();
formdata.append('file', file);
const req = new HttpRequest('POST', 'http://ec2-18-141-240-226.ap-southeast-1.compute.amazonaws.com:3000/api/file/product', formdata, {
    reportProgress: true,
    responseType: 'text'
  });
   return this.http.request(req);
}

//Edit Profile 
UpdateRegister(data: Register): Observable<any> {
  this.httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json' ,
        'x-access-token': this.getToken()    
        })          
  };
    return this.http.put<Register>(endpoint + 'api/file/profileupdate' , data,this.httpOptions);
 }


  //Edit Profile to store in the folder
  profile(file: File): Observable<HttpEvent<{}>> {
    const formdata: FormData = new FormData();
   formdata.append('file', file);
  const req = new HttpRequest('POST', 'http://localhost:8080/api/file/profile', formdata, {
      reportProgress: true,
      responseType: 'text'
    });
  return this.http.request(req);
  }
  
  getCartList(): Observable<any> {
    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'x-access-token': this.getToken()
          })
    };
    //const myheader=new HttpHeaders().set('AUTH_TOKEN', auth);
   // return this.http.get<any>(this.ADD_CART_API+product.productid,{headers:myheader});
  
    return this.http.get<any>(endpoint + 'api/getcart', this.httpOptions);
  }
  
  getdashboardproduct(){
    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'x-access-token': this.getToken()
          })
    };
    //const myheader=new HttpHeaders().set('AUTH_TOKEN', auth);
   // return this.http.get<any>(this.ADD_CART_API+product.productid,{headers:myheader});
  
    return this.http.get<any>(endpoint + 'api/productList', this.httpOptions);
  
  }
//Edit Product
  geteditprod(id){
    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'x-access-token': this.getToken()
          })
    };
    return this.http.get<any>(endpoint + 'api/editprod/'+id, this.httpOptions);
  }
  update(id,data:Product){
    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'x-access-token': this.getToken()
          })
    };
  
    return this.http.put<any>(endpoint + 'api/updatesProduct/'+id,data, this.httpOptions);
  }
  
}

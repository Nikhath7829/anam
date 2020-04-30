import { Component, OnInit ,Input} from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { LoadingController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {Observable, Subject, merge} from 'rxjs'
import { RestService } from '../rest.service';
import {debounceTime, distinctUntilChanged, filter, map} from 'rxjs/operators';
import { Register,Product } from '../Model/class';
import {AppComponent} from '../app.component';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {
  lat:any=''
  lng:any=''
  role;
  ar;
  cart;
  id;
  showFile = false;
  userid;
  photo;
  public data: Register = new Register();
  arr;
  errmsg: boolean;
  fileUploads: Observable<string[]>;
  @Input() fileUpload: string;
  products: Product[] = [];
  

  constructor(private fb: FormBuilder, public rest: RestService,private geolocation: Geolocation,public loadingController: LoadingController,
    public alertController: AlertController,  private route: Router,private test: AppComponent) { }

  ngOnInit() {
      this.retrieval();
     this.getuserprofile();
     this.getProductName();
     
  }

  change() {
    
      this.rest.getCartList().subscribe((AddtoCart) => {
  
        if (AddtoCart === undefined) {
          console.log(AddtoCart);
        }
        else {
          this.cart = Object.entries(AddtoCart).map(([type, value]) => ({ type, value }));
        //  this.carts = this.cart[0].value;
  this.route.navigate(['/product-detail'])
        }
      }, (err) => {
        console.log(err);
      });
    
  }

  getProductName(){
    this.rest.productname().subscribe((result) => {
      if (result == undefined) {
        console.log(result);
      }
      else {
        console.log(result);

    this.arr = Object.entries(result).map(([type, value]) => ({ type, value }));
        // this.states = this.arr[0].value;
   
       // console.log(this.states)
      }
    }, (err) => {
      console.log(err);
    });
  }

  doRefresh(event) {
this.getuserprofile();
 this.retrieval();
   setTimeout(() => {
       //console.log('Async operation has ended');
      event.target.complete();
    }, 2000);
  }
  
  retrieval() {
    this.rest.getproduct().subscribe((Product) => {
      if (Product === undefined) {
        console.log(Product);
      }
      else {
        this.products = Product.product;
        console.log(this.products);
      }
    }, (err) => {
      console.log(err);
    });
  }
  
  
  getuserprofile() {
    this.rest.userprofile().subscribe((result) => {
      if (result === undefined) {
        console.log(result);
        this.errmsg = true;
      }
      else {
        /* to get userdetails */
        this.arr = Object.entries(result).map(([type, value]) => ({ type, value }));
        this.userid = this.arr[1].value;
        this.photo= this.userid.photo;
        this.rest.sendId(this.userid.id);
        
        /* to get role of user */
        this.ar = Object.entries(this.userid.roles).map(([type, value]) => ({ type, value }));
        this.role = this.ar[0].value;
        this.rest.sendRole(this.role.name);
        /* Role Differntiation */
        if (this.rest.getRole() == "ADMIN") {
           this.test.getuserprofiles();
          // this.test.getuserDetails();
          this.route.navigate(['/admindashboard']);
        }
        else {
           this.test.getuserprofiles();
          // this.test.getuserDetails();
          this.route.navigate(['/dashboard']);
        }
      }
    }, (err) => {
      console.log(err);
  
    });
  }
  
  async getLoc()
  {
    const loading = await this.loadingController.create({
      message: 'Please wait...',
      });
    await loading.present();

    this.geolocation.getCurrentPosition({maximumAge: 1000, timeout: 5000, enableHighAccuracy: true }).then((resp) => {
      // resp.coords.latitude
      // resp.coords.longitude
      //alert("r succ"+resp.coords.latitude)
      //alert(JSON.stringify( resp.coords));
      loading.dismiss()
      this.lat=resp.coords.latitude
      this.lng=resp.coords.longitude
      console.log(this.lat);
      console.log(this.lng);
      },er=>{
        //alert("error getting location")
        loading.dismiss()
        this.showLoader('Can not retrieve Location')
      }).catch((error) => {
      //alert('Error getting location'+JSON.stringify(error));
      loading.dismiss()
      this.showLoader('Error getting location - '+JSON.stringify(error))
      });
  }


 async showLoader(msg)
  {
    const alert = await this.alertController.create({
      message: msg,
      buttons: ['OK']
    });

    await alert.present();
    
  }


}

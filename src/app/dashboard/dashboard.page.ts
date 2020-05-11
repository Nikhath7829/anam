import { Component, OnInit ,Input} from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { LoadingController, Platform } from '@ionic/angular';
import { AlertController ,PopoverController } from '@ionic/angular';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {Observable, Subject, merge} from 'rxjs'
import { RestService } from '../rest.service';
import {debounceTime, distinctUntilChanged, filter, map} from 'rxjs/operators';
import { Register,Product } from '../Model/class';
import {AppComponent} from '../app.component';
import { SafeResourceUrl, DomSanitizer } from '@angular/platform-browser';
import { Plugins,CameraResultType,CameraSource } from '@capacitor/core';
import { LangpagecomponentPage } from '../langpagecomponent/langpagecomponent.page';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {
  map:any;
  marker:any;
  states:any;
  image:SafeResourceUrl;
  timestamp:any;
  latitude:any='';
  longitude:any='';
  role;
  ar;
  cart;
  id;
  showFile = false;
  userid;
  photo;
  isItemAvailable:boolean=false;
  isItemAvailables:boolean=false;
  items;
  public data: Register = new Register();
  arr;
  errmsg: boolean;
  fileUploads: Observable<string[]>;
  @Input() fileUpload: string;
  products: Product[] = [];
  

  constructor(private domsanitizer:DomSanitizer,public platform:Platform,public popoverController:PopoverController ,private fb: FormBuilder,
     public rest: RestService,private geolocation: Geolocation,public loadingController: LoadingController,
    public alertController: AlertController,  private route: Router,private test: AppComponent) { 
      // this.platform.ready().then(()=>{
      //   var mapOptions = {
      //     center:{lat:23.2366,lng:79.3822},
      //   zoom:7
      //   }
      //   this.map = new goggle.maps.Map(document.getElementById("map"),mapOptions);
      //   this.GetLocation();
      // }
      // )
    }
//       GetLocation()
//       {
//         var ref= this;
//         let watch= this.geolocation.watchPosition();
//         watch.subscribe((position)=>{
// var gps=new goggle .maps.LatLng
// (position.coords.latitude,position.coords.longitude);
// if(ref.marker=null){

// }
//  else{
//   ref.marker = new goggle.maps.Marker({
//     position:gps,
//     map:ref.map,
//     title:'jhjhj jhjhj'
//   })
// }
// // else{
// //   ref.marker.setPosition(gps);
// // }

// ref.map.panTo(gps);
// ref.latitude = position.coords.latitude.toString();
// ref.longitude = position.coords.longitude.toString();
// ref.timestamp =( new Date(position.timestamp)).toString();
//         })
//       }
    

  ngOnInit() {
      this.retrieval();
     this.getuserprofile();
     this.getProductName();
     
  }

  takephoto()
  {
const  {Camera}  = Plugins;
const result =   Camera.getPhoto({
quality:50, 
allowEditing:true,
source :CameraSource.Camera,
resultType : CameraResultType.DataUrl
});
//this.image = this.domsanitizer.bypassSecurityTrustResourceUrl( result && result.base64Data,)



  }

  async presentPopover(ev: any) {
    const popover = await this.popoverController.create({
      component: LangpagecomponentPage,
      event: ev,
      translucent: true
    });
    return await popover.present();
  }


  getProductName(){
    this.rest.productname().subscribe((result) => {
      if (result == undefined) {
        console.log(result);
      }
      else {
        console.log(result);

    this.arr = Object.entries(result).map(([type, value]) => ({ type, value }));
    this.states = this.arr[0].value;
   
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
        console.log(this.userid.photo);
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

  getItems(ev: any) {
    this.items=this.states;
 
  const val = ev.target.value.toLowerCase();
  if (val && val.trim() != ''){
    this.isItemAvailable=true;
    this.isItemAvailables=false;
  this.items= this.states.filter((item => {
      return (item.name.toLowerCase().indexOf(val.toLowerCase()) > -1);
      }
      )
    )

  }
  else{
    this.isItemAvailables = true;
    this.isItemAvailable = false;
  }
}
  
//   async getLoc()
//   {
//     const loading = await this.loadingController.create({
//       message: 'Please wait...',
//       });
//     await loading.present();

//     this.geolocation.getCurrentPosition({maximumAge: 1000, timeout: 5000, enableHighAccuracy: true }).then((resp) => {
//       // resp.coords.latitude
//       // resp.coords.longitude
//       //alert("r succ"+resp.coords.latitude)
//       //alert(JSON.stringify( resp.coords));
//       loading.dismiss()
//       this.lat=resp.coords.latitude
//       this.lng=resp.coords.longitude
//       console.log(this.lat);
//       console.log(this.lng);
//       },er=>{
//         //alert("error getting location")
//         loading.dismiss()
//         this.showLoader('Can not retrieve Location')
//       }).catch((error) => {
//       //alert('Error getting location'+JSON.stringify(error));
//       loading.dismiss()
//       this.showLoader('Error getting location - '+JSON.stringify(error))
//       });
//   }


//  async showLoader(msg)
//   {
//     const alert = await this.alertController.create({
//       message: msg,
//       buttons: ['OK']
//     });

//     await alert.present();
    
//   }


}

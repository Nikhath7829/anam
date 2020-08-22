import { Component, OnInit, Input, ViewChild } from '@angular/core';

//import { Geolocation ,GeolocationOptions ,Geoposition ,PositionError } from '@ionic-native/geolocation';
import { LoadingController, Platform, IonSlides } from '@ionic/angular';
import { AlertController, PopoverController } from '@ionic/angular';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable, Subject, merge } from 'rxjs'
import { RestService } from '../rest.service';
import { debounceTime, distinctUntilChanged, filter, map } from 'rxjs/operators';
import { Register, Product, PostAdd } from '../Model/class';
import { AppComponent } from '../app.component';
import { SafeResourceUrl, DomSanitizer } from '@angular/platform-browser';
import { Plugins, CameraResultType, CameraSource } from '@capacitor/core';
import {LanguagesComponent} from '../languages/languages.component';
import { style, state, animate, transition, trigger } from '@angular/animations';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';



@Component({
  selector: 'app-dashboard',
  animations: [
    trigger(
      'enterAnimation', [

      transition(':enter', [
        style({ transform: 'translateX(0)', opacity: 0 }),
        animate('300ms ease-out', style({ opacity: 1 })),
      ]),
      transition(':leave', [
        style({ transform: 'translateX(0)', opacity: 1 }),
        animate('300ms ease-out', style({ opacity: 0 })),
      ])
    ]
    )
  ],
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {

  myphoto: any;
  states: any;
  image: SafeResourceUrl;
  timestamp: any;
  latitude: any = '';
  longitude: any = '';
  role;
  ar;
  cart;
  id;
  showFile = false;
  userid;
  photo;
  isItemAvailable: boolean = false;
  isItemAvailables: boolean = false;
  items;
  public data: Register = new Register();
  arr;
  errmsg: boolean;
  fileUploads: Observable<string[]>;
  @Input() fileUpload: string;
  products: Product[] = [];
  ads: PostAdd[] = [];
  isDisplay = false;
  show: boolean = false;
  toggleDisplay() {
    this.isDisplay = !this.isDisplay;
  }
  @ViewChild(IonSlides, { static: false }) slides: IonSlides
  constructor(private domsanitizer: DomSanitizer, public platform: Platform, public popoverController: PopoverController, private fb: FormBuilder,
    public rest: RestService, public loadingController: LoadingController,
    public alertController: AlertController, private route: Router, private camera: Camera, private test: AppComponent) {
    // this.platform.ready().then(()=>{
    //   var mapOptions = {
    //     center:{lat:23.2366,lng:79.3822},
    //   zoom:7
    //   }
    //   this.map = new google.maps.Map(document.getElementById("map"),mapOptions);
    //   this.GetLocation();
    // }
    // )
  }
  SlideChanged() {
  }
  ionViewDidLoad() {
    setTimeout(() =>
      this.slides.slideTo(5, 10000), 1000);
  }
slidesDidLoad(slides: IonSlides) {
    slides.startAutoplay();
  }
slideOptions = {
    initialSlide: 1,
    speed: 400,
  };

 ngOnInit() {
    this.retrieval();
    this.retrievals();
    this.getuserprofile();
    this.getProductName();
 }
 async chooselangauge(ev: any) {
  const popover = await this.popoverController.create({
    component: LanguagesComponent,
    cssClass: 'language',
    event: ev,
    mode: 'md',
    translucent: true
  });
  return await popover.present();
}

 getcamera() {
const options: CameraOptions = {
      quality: 70,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    }
    this.camera.getPicture(options).then((ImageData) => {

      this.myphoto = 'data:image/jpeg;base64,' + ImageData;
    }, (err) => {
      //Handle error
    });
  }




  getProductName() {
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
  // doRefresh(event) {
  //   this.getuserprofile();
  //   this.retrieval();
  //   this.retrievals();
  //   setTimeout(() => {
  //     //console.log('Async operation has ended');
  //     event.target.complete();
  //   }, 2000);
  // }


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

  retrievals() {
    this.rest.getAds().subscribe((AdsInfo) => {
      if (AdsInfo === undefined) {
        console.log(AdsInfo);
      }
      else {
        this.ads = AdsInfo.adsinfo;
        console.log(this.ads);
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
     //   this.photo = this.userid.photo;
        this.rest.sendId(this.userid.id);
        //  console.log(this.userid.photo);
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
    this.items = this.states;

    const val = ev.target.value.toLowerCase();
    if (val && val.trim() != '') {
      this.isItemAvailable = true;
      this.isItemAvailables = false;
      this.items = this.states.filter((item => {
        return (item.name.toLowerCase().indexOf(val.toLowerCase()) > -1);
      }
      )
      )

    }
    else {
      this.isItemAvailables = true;
      this.isItemAvailable = false;
    }
  }




}
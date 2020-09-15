import { Component, OnInit, Input,ElementRef , ViewChild } from '@angular/core';
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
import {LanguagesComponent} from '../languages/languages.component';
import { style, state, animate, transition, trigger } from '@angular/animations';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { NativeGeocoder, NativeGeocoderResult, NativeGeocoderOptions } from '@ionic-native/native-geocoder/ngx';
import { Geolocation } from '@ionic-native/geolocation/ngx';

declare var google;

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
  address: string;        // Users Address
  @ViewChild('map', { static: false }) mapElement: ElementRef;
  latitude: number;     //Users latitiude
  longitude: number;  //Users longitiude
  myphoto: any;
  states: any;
  image: SafeResourceUrl;
  
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
  map: any;
  toggleDisplay() {
    this.isDisplay = !this.isDisplay;
  }
  
  @ViewChild(IonSlides, { static: false }) slides: IonSlides
  constructor(public platform: Platform, public popoverController: PopoverController, 
    private fb: FormBuilder, public rest: RestService, public loadingController: LoadingController,
    public alertController: AlertController, private route: Router, private camera: Camera, 
    private test: AppComponent,private geolocation:Geolocation,private nativeGeocoder:NativeGeocoder) {
   
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

   loadMap() {
    this.geolocation.getCurrentPosition().then((resp) => {
    this.latitude = resp.coords.latitude;
    this.longitude = resp.coords.longitude;
    let latLng = new google.maps.LatLng(resp.coords.latitude, resp.coords.longitude);
      let mapOptions = {
        center: latLng,
        zoom: 15,
        mapTypeId: google.maps.MapTypeId.ROADMAP
      }
    this.getAddressFromCoords(resp.coords.latitude, resp.coords.longitude);
    this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
    this.map.addListener('dragend', () => {
       this.latitude = this.map.center.lat();
       this.longitude = this.map.center.lng();
       this.getAddressFromCoords(this.map.center.lat(), this.map.center.lng())
      });
}).catch((error) => {
      console.log('Error getting location', error);
    });
  }

  getAddressFromCoords(lattitude, longitude) {
    console.log("getAddressFromCoords " + lattitude + " " + longitude);
    let options: NativeGeocoderOptions = {
      useLocale: true,
      maxResults: 5
    };

    this.nativeGeocoder.reverseGeocode(lattitude, longitude, options)
      .then((result: NativeGeocoderResult[]) => {
        this.address = "";
        let responseAddress = [];
        for (let [key, value] of Object.entries(result[0])) {
          if (value.length > 0)
            responseAddress.push(value);

        }
        responseAddress.reverse();
        for (let value of responseAddress) {
          this.address += value + ", ";
        }
        this.address = this.address.slice(0, -2);
      })
      .catch((error: any) => {
        this.address = "Address Not Available!";
      });

  }
 



 async chooselangauge(ev: any) {
  const popover = await this.popoverController.create({
    component: LanguagesComponent,
    cssClass: 'my-class',
    event: ev,
    mode:'md',
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
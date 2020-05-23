import { Component, OnInit } from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { LoadingController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
@Component({
  selector: 'app-location',
  templateUrl: './location.page.html',
  styleUrls: ['./location.page.scss'],
})
export class LocationPage implements OnInit {
  lat:any=''
  lng:any=''

  constructor(private geolocation: Geolocation,public loadingController: LoadingController,
    public alertController: AlertController) { }

  ngOnInit() {
  }
  // async getLoc()
  // {
  //   const loading = await this.loadingController.create({
  //     message: 'Please wait...',
  //     });
  //   await loading.present();

  //   this.geolocation.getCurrentPosition({maximumAge: 1000, timeout: 5000, enableHighAccuracy: true }).then((resp) => {
  //     // resp.coords.latitude
  //     // resp.coords.longitude
  //     //alert("r succ"+resp.coords.latitude)
  //     //alert(JSON.stringify( resp.coords));
  //     loading.dismiss()
  //     this.lat=resp.coords.latitude
  //     this.lng=resp.coords.longitude
  //     },er=>{
  //       //alert("error getting location")
  //       loading.dismiss()
  //       this.showLoader('Can not retrieve Location')
  //     }).catch((error) => {
  //     //alert('Error getting location'+JSON.stringify(error));
  //     loading.dismiss()
  //     this.showLoader('Error getting location - '+JSON.stringify(error))
  //     });
  // }
ionViewDidLoad(){
  this.getLoc();
}

  getLoc(){
    this.geolocation.getCurrentPosition().then((resp)=>{
      this.lat=resp.coords.latitude
      console.log(this.lat);
      this.lng=resp.coords.longitude
      console.log(this.lng);
    }).catch((error)=>{
      console.log('Error at the location',error);
    });
  }

 
  
}



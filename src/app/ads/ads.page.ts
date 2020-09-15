import { Component, OnInit } from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation/ngx';


@Component({
  selector: 'app-ads',
  templateUrl: './ads.page.html',
  styleUrls: ['./ads.page.scss'],
})
export class AdsPage implements OnInit {
  data:string='';

  constructor(public geo:Geolocation) { }

  ngOnInit() {
   
  }
  location(){
    this.geo.getCurrentPosition().then((resp) => {
      // resp.coords.latitude
      // resp.coords.longitude
      this.data = 'Lat: ' + resp.coords.latitude + '<br>' + 'Lng:  '+ resp.coords.longitude
     }).catch((error) => {
       console.log('Error getting location', error);
     });
     
  }
  

   



}

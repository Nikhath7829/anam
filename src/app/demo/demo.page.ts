import { Component, OnInit } from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import {Platform} from '@ionic/angular';
import { google } from 'google-maps';


declare var goggle;
@Component({
  selector: 'app-demo',
  templateUrl: './demo.page.html',
  styleUrls: ['./demo.page.scss'],
})
export class DemoPage implements OnInit {
latitide:any="";
longitude:any="";
timestamp:any="";
  map: any;
  marker: any;

  constructor(public platform:Platform,public geolocation: Geolocation) { }

  ngOnInit() {
   
this.platform.ready().then(()=>{
  
  var mapOptions ={
    center:{lat:23.2366,lng:79.3822},
    zoom:7
  }

this.map = new goggle.maps.Map(document.getElementById("map"),mapOptions);
  this.GetLocation();
})
  }
  GetLocation()
  {
    var ref= this;
    let watch = this.geolocation.watchPosition();
    watch.subscribe((position)=>{
      var gps = new goggle.maps.Lating
      (position.coords.latitude,position.coords.longitude);
      if(ref.marker  == null)
      {
        ref.marker = new goggle.maps.Marker({
          position:gps,
          map:ref.map,
           title:  'my position'

        })
      }
      else{
        ref.marker.setPosition(gps);
      }
      ref.map.panTo(gps);
      ref.latitide = position.coords.latitude.toString();
      ref.longitude = position.coords.longitude.toString();
      ref.timestamp = (new Date(position.timestamp)).toString();

  })
  }

  
}



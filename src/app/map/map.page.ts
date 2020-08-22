import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { ImagePicker } from '@ionic-native/image-picker/ngx';

@Component({
  selector: 'app-map',
  templateUrl: './map.page.html',
  styleUrls: ['./map.page.scss'],
})
export class MapPage  {
imageResponse: any;
  options: any;

 
 
  constructor(private imagePicker: ImagePicker) { }

  
ngOnit(){

}
getImages() {
  this.options = {
    // Android only. Max images to be selected, defaults to 15. If this is set to 1, upon
    // selection of a single image, the plugin will return it.
    //maximumImagesCount: 3,


    width: 200,



    quality: 25,


    outputType: 1
  };
  this.imageResponse = [];
  this.imagePicker.getPictures(this.options).then((results) => {
    for (var i = 0; i < results.length; i++) {
      this.imageResponse.push('data:image/jpeg;base64,' + results[i]);
    }
  }, (err) => {
    alert(err);
  });
}

}

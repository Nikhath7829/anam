import { Component, OnInit } from '@angular/core';
import { ImagePicker, ImagePickerOptions } from '@ionic-native/image-picker/ngx';
@Component({
  selector: 'app-game',
  templateUrl: './game.page.html',
  styleUrls: ['./game.page.scss'],
})
export class GamePage implements OnInit {
  image;
  images:any=[];
  constructor(public imagePicker: ImagePicker) { }

  ngOnInit() {
  }
  getPictures() {
    this.imagePicker.getPictures({
      maximumImagesCount: 5,
      outputType: 1
    }).then(selectedImg => {
      selectedImg.forEach(i => this.images.push("data:image/jpeg;base64," + i));
    })
  }
}

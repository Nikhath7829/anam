import { Component, OnInit } from '@angular/core';
import { ImagePicker, ImagePickerOptions } from '@ionic-native/image-picker/ngx';
@Component({
  selector: 'app-game',
  templateUrl: './game.page.html',
  styleUrls: ['./game.page.scss'],
})
export class GamePage implements OnInit {
  public imageLists: any[] = [];  
  constructor(public imagePicker: ImagePicker) { }

  ngOnInit() {
  }
  getfromgallery(){
  
    let options: ImagePickerOptions = {  
      quality: 100,  
     width: 100,  
      height: 100,  
      maximumImagesCount: 5,
      };
      this.imagePicker.getPictures(options).then((results) => {  
        for (let index = 0; index < results.length; index++) {  
            //here iam converting image data to base64 data and push a data to array value.  
            this.imageLists.push('data:image/jpeg;base64,' + results[index]);  
        }  
        console.log(this.imageLists);  
    }, (error) => {  
        // Handle error   
        console.log(error);  
    });  
    }
}

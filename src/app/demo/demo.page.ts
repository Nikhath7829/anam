import { Component, OnInit } from '@angular/core';
import { ImagePicker, ImagePickerOptions } from '@ionic-native/image-picker/ngx';
import {File} from '@ionic-native/file/ngx';
@Component({
  selector: 'app-demo',
  templateUrl: './demo.page.html',
  styleUrls: ['./demo.page.scss'],
})
export class DemoPage implements OnInit {
  imageResponse: any;
  options: any;
  images:any=[];
  constructor(public imagePicker:ImagePicker,
    public file:File
    
        ) { }

  ngOnInit() {
  }

  // getImages() {
  //   this.options = {
    
  //     width: 200,
     
  //     quality: 25,

     
  //     outputType: 1
  //   };
  //   this.imageResponse = [];
  //   this.imagePicker.getPictures(this.options).then((results) => {
  //     for (var i = 0; i < results.length; i++) {
  //       this.imageResponse.push('data:image/jpeg;base64,' + results[i]);
  //     }
  //   }, (err) => {
  //     alert(err);
  //   });
  // }

  Pickimage(){
    var options:ImagePickerOptions ={
maximumImagesCount:1,
width:100,
height:100,
}
  

this.imagePicker.getPictures(options).then((results)=>{

  for(var interval = 0; interval<results.length;interval++)
  {
    let filename = results[interval].substring(results[interval]
      .lastIndexOf('/')+1); 
      let path = results [interval].substring(0, results[interval].lastIndexOf('/')+1);
      this.file.readAsDataURL(path,filename).then((base64string)=>{
this.images.push(base64string);
      })
  }

})
  }
  
}
















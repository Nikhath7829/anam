import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder, Validators } from '@angular/forms';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import {PostAdd} from '../Model/class';
import {RestService } from '../rest.service';
import { AlertController, NavController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { ImagePicker, ImagePickerOptions } from '@ionic-native/image-picker/ngx';
import {File} from '@ionic-native/file/ngx';

import { toBase64String } from '@angular/compiler/src/output/source_map';
@Component({
  selector: 'app-postadd',
  templateUrl: './postadd.page.html',   
  styleUrls: ['./postadd.page.scss'],
})
export class PostaddPage implements OnInit {
  public formcontrol: FormGroup;
  public formValid = true;
  isSubmitted = false;
  today = Date.now();
 cameraphotos: any;
 galleryphotos:any;
 demo:any= {};
 public data: PostAdd = new PostAdd();
images:any=[];

  constructor(public imagePicker: ImagePicker,public file:File,private fb: FormBuilder,private route:ActivatedRoute,public rest: RestService,
private camera: Camera) { 
     this.route.queryParams.subscribe(res =>{
       console.log(res);
       this.demo=res;
     });
     this.formcontrol = this.fb.group({
      postadname: ['', [Validators.required, Validators.pattern('[a-zA-Z ]*')]],
      postadprice: ['', [Validators.required,(Validators.minLength(10),(Validators.pattern(/^[0-9]\d{9}$/)) )]],
      postadquant: ['', [Validators.required, (Validators.minLength(10))]],
      postaddesc: ['', [Validators.required, ]],
      postadimage: ['', [Validators.required, ]],
      roles: this.fb.array(['USER'])
    });
    }
    
  //helps in triggers an error in validation
  get errorControl() {
    return this.formcontrol.controls;
  }
  post(){
    this.isSubmitted = true;
  if (!this.formcontrol.valid) {
alert("Nikhu");
 return false;
  }else{
    alert("hello");
  }
}

  
  ngOnInit() {
  }
  //GET IMAGE FROM CAMERA
  getfromcamera() {
    const options: CameraOptions = {
      quality: 70,
      
      sourceType:this.camera.PictureSourceType.CAMERA,
      destinationType: this.camera.DestinationType.FILE_URI,
      //encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    }
    this.camera.getPicture(options).then((ImageData) => {
      this.cameraphotos = 'data:image/jpeg;base64,' + ImageData;
    }, (err) => {
      //Handle error
    });
 }

 getfromgallery() {
  var options : ImagePickerOptions ={
    maximumImagesCount:5,
    width:100,
    height:100  
   }
   this.imagePicker.getPictures(options).then((results) =>{
    for (var i = 0; i < results.length; i++) {
      console.log('Image URI: ' + results[i]);
 }
  
}, (err) => { });
}
}
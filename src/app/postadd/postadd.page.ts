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
 imgURL;
  isSubmitted = false;
  today = Date.now();
 myphoto: any;
 demo:any= {};
 public data: PostAdd = new PostAdd();
 public imageLists: any[] = [];  
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
   this.camera.getPicture({
     sourceType:this.camera.PictureSourceType.CAMERA,
     destinationType:this.camera.DestinationType.FILE_URI
   }).then((res)=>{
     this.imgURL = res;
 }).catch(e =>{
   console.log(e);
 })
 }

 //GET IMAGE FROM GALLERY
 getfromgallery(){
//   this.camera.getPicture({
   
//     sourceType:this.camera.PictureSourceType.PHOTOLIBRARY,
//     destinationType:this.camera.DestinationType.DATA_URL
//   }).then((res)=>{
//     this.imgURL =  'data:image/jpeg;base64,' + res;
// }).catch(e =>{
//   console.log(e);
// })
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

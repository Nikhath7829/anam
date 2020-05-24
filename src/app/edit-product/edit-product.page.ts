import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {Product} from '../Model/class';
import { ImagePicker } from '@ionic-native/image-picker/ngx';
import { RestService } from '../rest.service';
import { HttpEventType, HttpResponse } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { NavController, AlertController, LoadingController } from '@ionic/angular';
import { ProductListPage } from '../product-list/product-list.page';
@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.page.html',
  styleUrls: ['./edit-product.page.scss'],
})
export class EditProductPage implements OnInit {
  public formcontrol: FormGroup;
  public data: Product = new Product();
  progress: { percentage: number } = { percentage: 0 };
  arr;
  valid: boolean = false;
  userid;
  id: number;
  selectedFiles: FileList;
  currentFileUpload: File;
  name;
  price;
  sub;
  category;
  discount;
  desc;
  userId;
  images;
  image;
  quant;
  
  constructor(public loadingCtrl: LoadingController,private fb: FormBuilder, private rest: RestService, private route: ActivatedRoute) { 
    this.formcontrol = this.fb.group({
      name: ['', [Validators.required]],
     // category: ['', Validators.required],
     desc: ['', Validators.required],
      price: ['', Validators.required],
      quant: ['', Validators.required],
   image: ['', [Validators.required]],
   userId: ['', [Validators.required]],
     
    });
    this.route.params.subscribe(params => this.doSearch(params));
}
  doSearch(param) {
    this.id = param.id;
  }

  ngOnInit() {
  }
  upload() {
    this.progress.percentage = 0;
    this.currentFileUpload = this.selectedFiles.item(0);
    this.image = this.currentFileUpload.name;
    console.log(this.currentFileUpload.name);
    this.rest.pushfileproducts(this.currentFileUpload).subscribe(event => {
      if (event.type === HttpEventType.UploadProgress) {
        this.progress.percentage = Math.round(100 * event.loaded / event.total);
      } else if (event instanceof HttpResponse) {
        console.log('File is completely uploadedss!');
      }
    });
    this.selectedFiles = undefined;
  }
  async presentLoadingDefault() {
    const loading = await this.loadingCtrl.create({
     });
   await  loading.present();
  setTimeout(() => {
      loading.dismiss();
    }, 500);
  }

  retrieval() {
    this.rest.geteditprod(this.id).subscribe((result) => {
      if (result === undefined) {
        console.log(result);
      }
      else {
       
        this.arr = Object.entries(result).map(([type, value]) => ({ type, value }));
        this.userid = this.arr[0].value;
        //Assigning//
        this.name = this.userid.name,
       this.price = this.userid.price;
         this.desc = this.userid.desc;
  
     this.quant= this.userid.quant;
  // this.images = this.userid.image;
         }
    }, (err) => {
      console.log(err);
    });
  }
  doRefresh(event) {
    //console.log('Begin async operation');
// this.success=false;
 this.retrieval();
   setTimeout(() => {
      //console.log('Async operation has ended');
     event.target.complete();
   }, 2000);
 }
 selectFiles(event) {
   this.selectedFiles = event.target.files;
 }

  alerts(signup) {
    //console.log('success');
  }
  


add() {

  this.formcontrol.get("name").setValidators(Validators.required);
  this.formcontrol.get("name").updateValueAndValidity();
  this.formcontrol.get("price").setValidators(Validators.required);
  this.formcontrol.get("price").updateValueAndValidity();
  this.formcontrol.get("image").setValidators(Validators.required);
  this.formcontrol.get("image").updateValueAndValidity();
  this.formcontrol.get("image").setValidators(Validators.required);
  this.formcontrol.get("image").updateValueAndValidity();
   this.formcontrol.get("desc").setValidators(Validators.required);
  this.formcontrol.get("desc").updateValueAndValidity();
  if (this.formcontrol.valid) {
    console.log('no error');
    Object.assign(this.data, this.formcontrol.value);
    console.log(this.data);

    this.rest.update(this.id, this.data).subscribe((result) => {
      if (result == undefined) {
        console.log(result);
      }
      else {
        this.formcontrol.reset();
        this.presentLoadingDefault();
        this.retrieval();
       // this.test.load();
        //console.log(result);
      }
    });
  }
  else {
    console.log('error');
    this.valid = true;
  }
}
}


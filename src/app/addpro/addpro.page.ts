import { Component, OnInit } from '@angular/core';
import { AlertController, NavController } from '@ionic/angular';
import { ImagePicker, ImagePickerOptions } from '@ionic-native/image-picker/ngx';
import { HttpResponse, HttpEventType } from '@angular/common/http';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { RestService } from '../rest.service';
import { Product } from '../Model/class';
import { AppComponent } from '../app.component';
@Component({
  selector: 'app-addpro',
  templateUrl: './addpro.page.html',
  styleUrls: ['./addpro.page.scss'],
})
export class AddproPage implements OnInit {
  public formcontrol: FormGroup;
  public data: Product = new Product();
  valid: boolean = false;
  progress: { percentage: number } = { percentage: 0 };
  selectedFiles: FileList;
  currentFileUpload: File;
  image: any;
  constructor(private fb: FormBuilder, private rest: RestService, 
    public navCtrl: NavController, public alertController: AlertController,) { 
      this.formcontrol= this.fb.group({
        productname: ['', [Validators.required]],
        productdescription: ['', Validators.required],
        productprice: ['', Validators.required],
       
        productcategory: ['', Validators.required],
        productquantity: ['', Validators.required],
        image: ['', [Validators.required]],
        status: '0',
        userId: this.rest.getId()
      })
    }
  
    keyPress(event: any) {
      const pattern = /[0-9]/;
      let inputChar = String.fromCharCode(event.charCode);
      if (event.keyCode != 8 && !pattern.test(inputChar)) {
        event.preventDefault();
      }
    }
    async presentAlert() {
      const alert = await this.alertController.create({
        header: 'Confirm',
        subHeader: 'Alert:',
        message: 'Please Confirm Before Posting.',
        buttons: ['OK']
      });
      await alert.present();
    }
    selectFiles(event) {
      this.selectedFiles = event.target.files;
    }
    
  

  ngOnInit() {
  }
  doRefresh(event) {
    //console.log('Begin async operation');
    
   setTimeout(() => {
      //console.log('Async operation has ended');
     event.target.complete();
   }, 2000);
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
      console.log('File is completely uploaded!');
    }
  });
  this.selectedFiles = undefined;
}

uploadpro() {
  this.progress.percentage = 0;
  this.currentFileUpload = this.selectedFiles.item(0);
  this.image = this.currentFileUpload.name;
  console.log(this.currentFileUpload.name);
 
  this.selectedFiles = undefined;
}

add(){
  this.formcontrol.get("productname").setValidators(Validators.required);
  this.formcontrol.get("productname").updateValueAndValidity();
  this.formcontrol.get("productdescription").setValidators(Validators.required);
  this.formcontrol.get("productdescription").updateValueAndValidity();
 this.formcontrol.get("productcategory").setValidators(Validators.required);
  this.formcontrol.get("productcategory").updateValueAndValidity();
  this.formcontrol.get("productprice").setValidators(Validators.required);
  this.formcontrol.get("productprice").updateValueAndValidity();
  this.formcontrol.get("productquantity").setValidators(Validators.required);
  this.formcontrol.get("productquantity").updateValueAndValidity();
  if (this.formcontrol.valid) {
    console.log('no error');
  }
  else {
    console.log('error');
    this.valid = true;
  }


Object.assign(this.data, this.formcontrol.value);
console.log(this.data);
if (this.formcontrol.valid) {
  this.rest.addProduct(this.data).subscribe((result) => {
    this.upload();
    console.log(result);
    if (result === undefined) {
      console.log(result);
    }
    else {
      this.presentAlert();
      this.formcontrol.reset();
      this.formcontrol = this.fb.group({
        productname: ['', [Validators.required]],
        productdescription: ['', Validators.required],
        productdiscount: ['', Validators.required],
        productcategory: ['', Validators.required],
        productprice: ['', Validators.required],
        productquantity: ['', Validators.required],
        image: ['', Validators.required],
       
        status: '0',
        userId: this.rest.getId()
      });
    }
  }, (err) => {
    console.log(err);
  });
}
else {
  alert("something Went Wrong");
}
}
}

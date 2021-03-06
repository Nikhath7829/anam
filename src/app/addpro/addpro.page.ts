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
    public navCtrl: NavController, public alertController: AlertController) { 
      this.formcontrol= this.fb.group({
        name: ['', [Validators.required]],
        desc: ['', Validators.required],
        price: ['', Validators.required],
        category: ['', Validators.required],
        quant: ['', Validators.required],
        city: ['', Validators.required],
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
  this.formcontrol.get("name").setValidators(Validators.required);
  this.formcontrol.get("name").updateValueAndValidity();
  this.formcontrol.get("desc").setValidators(Validators.required);
  this.formcontrol.get("desc").updateValueAndValidity();
  this.formcontrol.get("category").setValidators(Validators.required);
  this.formcontrol.get("category").updateValueAndValidity();
  this.formcontrol.get("price").setValidators(Validators.required);
  this.formcontrol.get("price").updateValueAndValidity();
  this.formcontrol.get("quant").setValidators(Validators.required);
  this.formcontrol.get("quant").updateValueAndValidity();
  this.formcontrol.get("image").setValidators(Validators.required);
  this.formcontrol.get("image").updateValueAndValidity();
  // this.formcontrol.get("image1").setValidators(Validators.required);
  // this.formcontrol.get("image1").updateValueAndValidity();
  // this.formcontrol.get("image2").setValidators(Validators.required);
  // this.formcontrol.get("image2").updateValueAndValidity();
  
  // this.formcontrol.get("image3").setValidators(Validators.required);
  // this.formcontrol.get("image3").updateValueAndValidity();
  this.formcontrol.get("city").setValidators(Validators.required);
  this.formcontrol.get("city").updateValueAndValidity();
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
        name: ['', [Validators.required]],
        desc: ['', Validators.required],
        category: ['', Validators.required],
        price: ['', Validators.required],
        city: ['', Validators.required],
        quant: ['', Validators.required],
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

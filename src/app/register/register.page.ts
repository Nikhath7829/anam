import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpResponse, HttpEventType } from '@angular/common/http';
import { RestService } from '../rest.service';
import { Router } from '@angular/router';
import { AlertController, ModalController, PopoverController } from '@ionic/angular';
import { Register } from '../Model/class';
import { LoadingController } from '@ionic/angular';
import { NavController } from '@ionic/angular';
import { MenuController } from '@ionic/angular';
@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  public formcontrol: FormGroup;
  public formValid = true;
  isSubmitted = false;
  showMsg: boolean = false;
  valid: boolean;
  flag: any;
  selectedFile: FileList;
  currentFileUpload: File;
  errmsg: any;
  public data: Register = new Register();

  constructor(public menuCtrl: MenuController, private popover: PopoverController, private navCtrl: NavController, public fb: FormBuilder, private loadingCtrl: LoadingController,
    private alertController: AlertController, public rest: RestService, private myRoute: Router, private modalCtrl: ModalController) {
    this.formcontrol = this.fb.group({
      fullname: ['', [Validators.required, Validators.pattern('[a-zA-Z ]*'),(Validators.maxLength(20)), (Validators.minLength(6))]],
      number: ['', [Validators.required, (Validators.minLength(10)), Validators.pattern('^[0-9]+$')]],
      roles: this.fb.array(['USER'])
    });
  }
  ionViewWillEnter() {
    this.menuCtrl.enable(false);
  }

  //helps in triggers an error in validation
  get errorControl() {
    return this.formcontrol.controls;
  }


  async filldetails() {
    const alert = await this.alertController.create({
      cssClass: 'my-class',
     // header: 'Confirm!',
      message: 'Please fill out the fields!!!',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'primary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Okay',
          handler: () => {
            console.log('Confirm Okay');
          }
        }
      ]
    });

    await alert.present();
  }

  ngOnInit() {
    this.valid = false;
    this.errmsg = false;
    this.isSubmitted = false;
  }
 async createLoader() {
    let loading = await this.loadingCtrl.create({
      message: "Registering",
      duration: 1000,
      showBackdrop: false,
      spinner: "lines-small"
    });
    loading.present();
    setTimeout(() => {
      loading.dismiss();
    }, 2000)
    this.myRoute.navigate(["/login"]);
 }
 
getregister(){

  this.isSubmitted = true;
  if (!this.formcontrol.valid) {
   // alert("Please fill out the fields");
   this.filldetails();
    return false;
   
} else{
  if (this.formcontrol.valid){
    Object.assign(this.data, this.formcontrol.value);
   console.log(this.data);
    this.rest.Register(this.data).subscribe((result) => {   
      if(result === undefined)
         {
           console.log(result);
           this.errmsg=true;
         
         } else{
          this.formcontrol.reset();
          this.formcontrol = this.fb.group({
            fullname: ['', [Validators.required, Validators.pattern('[a-zA-Z ]*'),(Validators.maxLength(20)), (Validators.minLength(6))]],
            number: ['', [Validators.required, (Validators.minLength(10)), Validators.pattern('^[0-9]+$')]],
            roles: this.fb.array(['USER'])
          });
          this.createLoader();
          this.myRoute.navigate[('/login')]
         }
  },(err) => {
    // err.status(200).send("Error -> " + err);
   // this.server=true;
     console.log(err);
 });
}else{
  this.valid=true;
}
}
 

 
    }
}

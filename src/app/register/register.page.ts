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
import { Platform } from '@ionic/angular';
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

  constructor(private platform: Platform, public menuCtrl: MenuController, private popover: PopoverController, private navCtrl: NavController, public fb: FormBuilder, private loadingCtrl: LoadingController,
    private alertController: AlertController, public rest: RestService, private myRoute: Router, private modalCtrl: ModalController) {
    this.formcontrol = this.fb.group({
      fullname: ['', [Validators.required, Validators.pattern('[a-zA-Z ]*'), (Validators.maxLength(20)), (Validators.minLength(5))]],
      number: ['', [Validators.required, (Validators.minLength(10)), (Validators.pattern(/^[6-9]\d{9}$/))]],
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

  //Empty Fileds Alert
  async filldetails() {
    const alert = await this.alertController.create({

      cssClass: 'my-custom-class',
      // header: 'Confirm!',
      message: 'Please fill out the fields!',
      buttons: [
        {
          text: 'Okay',
          role: 'cancel',
          cssClass: 'primary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        },]
    }); await alert.present();
  }

  //Success fileds Alert
  async successalert() {
    const alert = await this.alertController.create({
   cssClass: 'my-custom-class',
     message: 'Succesfully Registered!',
      buttons: [
        {
          text: 'Proceed to login',
          role: 'cancel',
          cssClass: 'primary',
          handler: (blah) => {
            console.log('Confirm Cancel: proceed');
          }
        },]
    }); await alert.present();
  }


  ngOnInit() {
    this.valid = false;
    this.errmsg = false;
    this.isSubmitted = false;
  }

  
  getregister() {
    this.isSubmitted = true;
    if (!this.formcontrol.valid) {
      
      return false;

    } else {
      if (this.formcontrol.valid) {
        Object.assign(this.data, this.formcontrol.value);
        console.log(this.data);
        this.rest.Register(this.data).subscribe((result) => {
          if (result === undefined) {
            console.log(result);
            this.errmsg = true;

          } else {
            //  this.formcontrol.reset();
            // this.formcontrol = this.fb.group({
            //   fullname: ['', [Validators.required, Validators.pattern('[a-zA-Z ]*'), (Validators.maxLength(20)), (Validators.minLength(5))]],
            //   number: ['', [Validators.required, (Validators.minLength(10)), Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]],
            //   roles: this.fb.array(['USER'])
            // });
           console.log("Registered");
            this.successalert();
         this.myRoute.navigate[('/login')]
          };

        }, (err) => {
          // err.status(200).send("Error -> " + err);
          // this.server=true;
          console.log(err);
        });
      } else {
        this.valid = true;
      }
    }



  }
}

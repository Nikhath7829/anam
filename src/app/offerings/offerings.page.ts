import { Component, OnInit } from '@angular/core';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { Router } from '@angular/router';
@Component({
  selector: 'app-offerings',
  templateUrl: './offerings.page.html',
  styleUrls: ['./offerings.page.scss'],
})
export class OfferingsPage implements OnInit {
  myphoto: any;

  category : any = [
    { id:1, ImageCategory :  '../../assets/mic/food.png',categorytype: 'Vegetables'},
    { id:2,ImageCategory :  '../../assets/mic/fruits.png',categorytype: 'Fruits'},
    { id:3,ImageCategory :  '../../assets/mic/nut.png',categorytype: 'Nuts'},
    { id:4,ImageCategory :  '../../assets/mic/flower (1).png',categorytype: 'Spices'},
    { id:5,ImageCategory :  '../../assets/mic/soil.png',categorytype: 'Seeds'},
    { id:6,ImageCategory :  '../../assets/mic/salad.png',categorytype: 'Bevarages'},
    { id:7,ImageCategory :  '../../assets/mic/edibleoil.png',categorytype: 'Edible Oil'},
    {id:8 ,ImageCategory :  '../../assets/mic/seed (1).png',categorytype: 'Fertilizers'}
   
  ];
  constructor(private camera: Camera,private router:Router) { }

  ngOnInit() {
  }

  gotopostadd(demo){

    this.router.navigate(['/postadd'],{
      queryParams:demo
    });
  }
  getcamera() {
    const options: CameraOptions = {
          quality: 70,
          destinationType: this.camera.DestinationType.DATA_URL,
          encodingType: this.camera.EncodingType.JPEG,
          mediaType: this.camera.MediaType.PICTURE
        }
        this.camera.getPicture(options).then((ImageData) => {
    
          this.myphoto = 'data:image/jpeg;base64,' + ImageData;
        }, (err) => {
          //Handle error
        });
      }
}

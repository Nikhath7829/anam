import { Component, OnInit ,ViewChild} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RestService } from '../rest.service';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';
import { Register, Product } from '../Model/class';
import { AlertController, ModalController, ToastController, IonSlides } from '@ionic/angular';
@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.page.html',
  styleUrls: ['./product-detail.page.scss'],
})
export class ProductDetailPage implements OnInit {
  sliderOpts = {
    zoom:{
      maxRatio:5
    }
  };
  id: number;
  arr: any;
  file:string = null;
  userid: any;
  errmsg: any;
  image;
  image1;
  image2;
  image3;
  productid: any;
  name;
  price;
  city;
  quant;
  public formcontrol: FormGroup;
  desc;
  Quantity: any;
  total;
  @ViewChild(IonSlides, { static: false }) slides: IonSlides
  products: Product[] = [];
  constructor(private socialSharing: SocialSharing,private rest: RestService, private fb: FormBuilder, private myRoute: Router, private route: ActivatedRoute) {
    this.route.params.subscribe(params => this.doSearch(params));
  }
  SlideChanged() {
  }
  ionViewDidLoad() {
    setTimeout(() =>
      this.slides.slideTo(5, 10000), 1000);
  }

  slidesDidLoad(slides: IonSlides) {
    slides.startAutoplay();
  }

  slideOptions = {
    initialSlide: 1,
    speed: 400,
  };
  ngOnInit() {
    this.getProducts();
  }
share(){
  this.socialSharing.share(this.file)
.then(() =>{

}).catch(() =>{

});
}
  doSearch(param) {
    this.id = param.id;
  }

  doRefresh(event) {


    this.getProducts();

    setTimeout(() => {
      //console.log('Async operation has ended');
      event.target.complete();
    }, 2000);
  }



  getProducts() {
    this.rest.getProduct(this.id).subscribe((result) => {
      if (result === undefined) {
        console.log(result);
        this.errmsg = true;
      }
      else {
        this.arr = Object.entries(result).map(([type, value]) => ({ type, value }));
        this.userid = this.arr[0].value;
        this.name = this.userid.name;
        this.price = this.userid.price;
        this.quant = this.userid.quant;
        this.desc = this.userid.desc;
        this.city = this.userid.city;
        this.image = this.userid.image;
        this.image1= this,this.userid.image1;
        this.image2= this,this.userid.image2;
        this.image3= this,this.userid.image3;
        localStorage.setItem("productId", this.userid.id);
        localStorage.setItem("name", this.userid.name);
        localStorage.setItem("price", this.userid.price);
        localStorage.setItem("image", this.userid.image);
        localStorage.setItem("city", this.userid.city);


      }
    }, (err) => {
      console.log(err);
    });
  }


  validation() {

    this.formcontrol = this.fb.group({
      name: localStorage.getItem("name"),
      price: localStorage.getItem("price"),
      productId: localStorage.getItem("productId"),
      image: localStorage.getItem("image"),
      quant: ['', Validators.required],
      total: [''],
      userId: this.rest.getId(),
    });
  }
}



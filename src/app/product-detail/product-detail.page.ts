import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RestService } from '../rest.service';
import { AddtoCart } from '../Model/class';
import { Register,Product } from '../Model/class';
import { AlertController, ModalController, ToastController } from '@ionic/angular';
@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.page.html',
  styleUrls: ['./product-detail.page.scss'],
})
export class ProductDetailPage implements OnInit {
  id: number;
  arr: any;
  userid: any;
  errmsg: any;
  image;
  productid: any;
  name;
  price;
  quant;
  public formcontrol: FormGroup;
  desc;
  Quantity: any;
  total;
  
products: Product[] = [];
  constructor(private rest: RestService,private fb: FormBuilder) { }

  ngOnInit() {
    this.getProducts();
  }
 

  
  getProducts() {
    this.rest.getProduct(this.id).subscribe((result) => {
      if (result === undefined) {
        console.log(result);
        this.errmsg = true;
      }
      // else {
      //   this.arr = Object.entries(result).map(([type, value]) => ({ type, value }));
      //   this.userid = this.arr[0].value;
      //   this.name = this.userid.name;
      //   this.price = this.userid.price;
      //   this.quant = this.userid.quant;
      //   this.desc = this.userid.desc;
      //   this.image = this.userid.image;
      //   localStorage.setItem("productId", this.userid.id);
      //   localStorage.setItem("name", this.userid.name);
      //   localStorage.setItem("price", this.userid.price);
      //   localStorage.setItem("image", this.userid.image);
       
       
      // }
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



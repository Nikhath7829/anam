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
cart;
carts;

products: Product[] = [];
  constructor(private rest: RestService) { }

  ngOnInit() {
  }
 
  // retrieval() {
  //   this.rest.getproduct().subscribe((Product) => {
  //     if (Product === undefined) {
  //       console.log(Product);
  //     }
  //     else {
  //       this.products = Product.product;
  //       console.log(this.products);
  //     }
  //   }, (err) => {
  //     console.log(err);
  //   });
  // }
  getCarList() {
    this.rest.getCartList().subscribe((AddtoCart) => {

      if (AddtoCart === undefined) {
        console.log(AddtoCart);
      }
      else {
        this.cart = Object.entries(AddtoCart).map(([type, value]) => ({ type, value }));
        this.carts = this.cart[0].value;

      }
    }, (err) => {
      console.log(err);
    });
  }


}

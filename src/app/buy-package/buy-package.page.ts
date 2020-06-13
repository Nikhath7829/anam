import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-buy-package',
  templateUrl: './buy-package.page.html',
  styleUrls: ['./buy-package.page.scss'],
})
export class BuyPackagePage implements OnInit {
  CatValue = '';
  constructor(private myRoute: Router) { }

  ngOnInit() {
  }
  catclicked(){
    console.log('Clicked');
    this.myRoute.navigateByUrl('categorylist/ironman')
  }
}

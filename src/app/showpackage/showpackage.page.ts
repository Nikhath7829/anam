import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from '@ionic/angular';
@Component({
  selector: 'app-showpackage',
  templateUrl: './showpackage.page.html',
  styleUrls: ['./showpackage.page.scss'],
})
export class ShowpackagePage implements OnInit {
  checked : boolean = false;
  constructor(public nav: NavController, public navParams: NavParams) { 
    // this.checklist = this.navParams.get('checklist');
  }

  ngOnInit() {
  }
  addValue(e): void {
  	console.log(e.currentTarget.checked);	
}
}

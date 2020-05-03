import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
@Component({
  selector: 'app-loginpopover',
  templateUrl: './loginpopover.page.html',
  styleUrls: ['./loginpopover.page.scss'],
})
export class LoginpopoverPage implements OnInit {

  constructor(private popover:PopoverController) { }

  ngOnInit() {
  }
  Closepopover (){
    this.popover.dismiss();
  }
}

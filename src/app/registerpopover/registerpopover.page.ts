import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-registerpopover',
  templateUrl: './registerpopover.page.html',
  styleUrls: ['./registerpopover.page.scss'],
})
export class RegisterpopoverPage implements OnInit {

  constructor(private popover:PopoverController) { }

  ngOnInit() {
  }
  Closepopover (){
    this.popover.dismiss();
  }
}

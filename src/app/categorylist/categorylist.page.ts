import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-categorylist',
  templateUrl: './categorylist.page.html',
  styleUrls: ['./categorylist.page.scss'],
})
export class CategorylistPage implements OnInit {

  constructor(public activateRoute:ActivatedRoute) { }

  ngOnInit() {
    let dataRec = this.activateRoute.snapshot.paramMap.get('name')
    console.log(dataRec);
  }

}

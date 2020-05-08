import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-array',
  templateUrl: './array.page.html',
  styleUrls: ['./array.page.scss'],
})
export class ArrayPage implements OnInit {
arr :any[]=[];
item:any[]=[];
  constructor() {
    
   }

  ngOnInit() {
  }

}

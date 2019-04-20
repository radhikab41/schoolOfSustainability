import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'work',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class WorkComponent implements OnInit  {
  newcomponent = "Entered in new component created";
   constructor() {}
   ngOnInit() { }
 
}

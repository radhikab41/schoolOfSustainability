import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'model',
  templateUrl: './model.component.html',
  styleUrls: ['./model.component.css']
})
export class ModelComponent implements OnInit  {
  newcomponent = "Entered in new component created";
   constructor() {}
   ngOnInit() { }
 
}

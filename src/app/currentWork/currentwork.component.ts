import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-currentwork',
  templateUrl: './currentwork.component.html',
  styleUrls: ['./currentwork.component.css']
})
export class CurrentWorkComponent implements OnInit{
  newcomponent = "Entered in new component created";
   constructor() {}
   ngOnInit() { }
 
}

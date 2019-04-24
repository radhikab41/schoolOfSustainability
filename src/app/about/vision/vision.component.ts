import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'vision',
  templateUrl: './vision.component.html',
  styleUrls: ['./vision.component.css']
})
export class VisionComponent implements OnInit  {
  newcomponent = "Entered in new component created";
   constructor() {}
   ngOnInit() { }
 
}

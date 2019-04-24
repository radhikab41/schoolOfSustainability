import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'story',
  templateUrl: './story.component.html',
  styleUrls: ['./story.component.css']
})
export class StoryComponent implements OnInit  {
  newcomponent = "Entered in new component created";
   constructor() {}
   ngOnInit() { }
 
}

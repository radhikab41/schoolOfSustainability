import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'opportunity',
  templateUrl: './opportunity.component.html',
  styleUrls: ['./opportunity.component.css']
})
export class OpportunityComponent implements OnInit  {
  newcomponent = "Entered in new component created";
   constructor() {}
   ngOnInit() { }
 
}

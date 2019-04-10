import { Component ,OnInit} from '@angular/core';

@Component({
  selector: 'app-newsevents',
  templateUrl: './newsevents.component.html',
  styleUrls: ['./newsevents.component.css']
})
export class NewsEventsComponent implements OnInit{

  newcomponent = "Entered in new component created";
   constructor() {}
   ngOnInit() { }
 
}

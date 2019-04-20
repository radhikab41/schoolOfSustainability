import { Component,OnInit} from '@angular/core';

@Component({
  selector: 'database',
  templateUrl: './database.component.html',
  styleUrls: ['./database.component.css']
})
export class DatabaseComponent implements OnInit {
  newcomponent = "Entered in new component created";
   constructor() {}
   ngOnInit() { }
 
}

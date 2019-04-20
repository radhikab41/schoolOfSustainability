import { Component ,OnInit} from '@angular/core';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  projects = ['project 1','project2','project3'];
  constructor() {}
  ngOnInit() { }
}

import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';
  sections= ['Home','About','Bioculture Database','News & Events'];
  selectors =['app-home','app-about','app-database','app-news'];
}

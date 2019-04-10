import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common';
import { RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { CurrentWorkComponent } from './currentWork/currentwork.component';
import { DatabaseComponent } from './database/database.component';
import { NewsEventsComponent } from './newsEvents/newsevents.component';
import { ResourcesComponent } from './resources/resources.component';

@NgModule({
  declarations: [
    AppComponent,HomeComponent,AboutComponent,CurrentWorkComponent,DatabaseComponent,NewsEventsComponent,ResourcesComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    RouterModule.forRoot([
      {
         path: 'app-home',
         component: HomeComponent
      },
      {
        path: 'app-about',
        component: AboutComponent
      },
      {
        path:'app-currentwork',
        component:CurrentWorkComponent
      },
      {
        path : 'app-database',
        component:DatabaseComponent
      },
      {
        path:'app-newsevents',
        component:NewsEventsComponent
      },{
        path:'app-resources',
        component:ResourcesComponent
      }
   ])
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
export class AppRoutingModule { }

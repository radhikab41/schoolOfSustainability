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
         path: 'home',
         component: HomeComponent
      },
      {
        path: 'about',
        component: AboutComponent
      },
      {
        path:'currentwork',
        component:CurrentWorkComponent
      },
      {
        path : 'database',
        component:DatabaseComponent
      },
      {
        path:'newsevents',
        component:NewsEventsComponent
      },{
        path:'resources',
        component:ResourcesComponent
      }
   ])
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
export class AppRoutingModule { }

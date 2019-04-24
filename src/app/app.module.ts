import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common';
import { RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { CurrentWorkComponent } from './about/currentWork/currentwork.component';
import { DatabaseComponent } from './database/database.component';
import { NewsEventsComponent } from './newsEvents/newsevents.component';
import { ResourcesComponent } from './resources/resources.component';
import {ModelComponent} from './about/model/model.component';
import {OpportunityComponent} from './about/opportunity/opportunity.component';
import {StoryComponent} from './about/story/story.component';
import {TeamComponent} from './about/team/team.component';
import {VisionComponent} from './about/vision/vision.component';
//import {WorkComponent} from './about/work/work.component';

@NgModule({
  declarations: [
    AppComponent,HomeComponent,AboutComponent,CurrentWorkComponent,DatabaseComponent,NewsEventsComponent,ResourcesComponent,ModelComponent,OpportunityComponent,StoryComponent,TeamComponent,VisionComponent
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
        path:'about/currentwork',
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
      },{
        path : 'about/model',
        component : ModelComponent
      },{
        path : 'about/opportunity',
        component:OpportunityComponent
      },{
        path : 'about/story',
        component : StoryComponent
      },{
        path : 'about/team',
        component : TeamComponent
      }, {
        path:'about/vision',
        component:VisionComponent
      }
   ])
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
export class AppRoutingModule { }

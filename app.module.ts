import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BusinessNewsComponent } from './business-news/business-news.component';
import { CrimeComponent } from './crime/crime.component';
import { HeaderComponent } from './header/header.component';
import { PoliticsComponent } from './politics/politics.component';
import { SportsComponent } from './sports/sports.component';
import { TechnologyComponent } from './technology/technology.component';
import { WorldComponent } from './world/world.component';
import { RouterModule, Routes } from '@angular/router';
import { PipeTransform,Pipe } from '@angular/core';
import { LimitNews } from './limit-news';
import { ViewDetailsComponent } from './view-details/view-details.component';

const allLinks:Routes = [
  {path:'buisnessnews',component:BusinessNewsComponent},
  {path:'politics',component:PoliticsComponent},
  {path:'crime',component:CrimeComponent},
  {path:'world',component:WorldComponent},
  {path:'technology',component:TechnologyComponent},
  {path:'sports',component:SportsComponent},
  {path:'newsDetail/:category',component:ViewDetailsComponent},

]


@NgModule({
  declarations: [
    AppComponent,
    BusinessNewsComponent,
    CrimeComponent,
    HeaderComponent,
    PoliticsComponent,
    SportsComponent,
    TechnologyComponent,
    WorldComponent,
    LimitNews,
    ViewDetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(allLinks)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

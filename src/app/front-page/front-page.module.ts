import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PagesListComponent} from './pages-list/pages-list.component';
import {HomePageComponent} from './home-page/home-page.component';
import {FrontRoutingModule} from './front-routing.module';
import {FrontPageComponent} from './front-page.component';
import {NavbarComponent} from './navbar/navbar.component';
import {MaterialModule} from '../material.module';
import { PagesComponent } from './pages/pages.component';


@NgModule({
  imports: [
    CommonModule,
    FrontRoutingModule,
    MaterialModule
  ],
  entryComponents: [],
  declarations: [PagesListComponent, HomePageComponent, FrontPageComponent, NavbarComponent, PagesComponent]

})
export class FrontPageModule { }

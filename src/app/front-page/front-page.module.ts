import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PagesListComponent} from './pages-list/pages-list.component';
import {HomePageComponent} from './home-page/home-page.component';
import {FrontRoutingModule} from './front-routing.module';
import {FrontPageComponent} from './front-page.component';


@NgModule({
  imports: [
    CommonModule,
    FrontRoutingModule
  ],
  entryComponents: [],
  declarations: [PagesListComponent, HomePageComponent, FrontPageComponent]

})
export class FrontPageModule { }

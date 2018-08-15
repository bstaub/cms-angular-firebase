import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule} from './material.module';
import { AdminRoutingModule} from './admin-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import {AdminPageComponent} from './admin-page.component';
import {NavbarComponent} from './navbar/navbar.component';
import { MenusComponent } from './menus/menus.component';
import { PostsComponent } from './posts/posts.component';
import {FormsModule} from '@angular/forms';


@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    AdminRoutingModule,
    FormsModule
  ],
  declarations: [DashboardComponent, AdminPageComponent, NavbarComponent, MenusComponent, PostsComponent]
})
export class AdminPageModule { }

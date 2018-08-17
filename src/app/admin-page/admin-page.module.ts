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
import { ConfirmationDialogComponent } from './shared/confirmation-dialog/confirmation-dialog.component';
import { EditMenuComponent } from './edit-menu/edit-menu/edit-menu.component';


@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    AdminRoutingModule,
    FormsModule
  ],
  entryComponents: [ConfirmationDialogComponent, EditMenuComponent],
  declarations: [DashboardComponent, AdminPageComponent, NavbarComponent, MenusComponent, PostsComponent, ConfirmationDialogComponent, EditMenuComponent]

})
export class AdminPageModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginPageComponent} from './app/login-page/login-page.component';
import {PagesListComponent} from './app/pages-list/pages-list.component';

const routes: Routes = [
  {path: '', component: PagesListComponent},
  {path: 'login', component: LoginPageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

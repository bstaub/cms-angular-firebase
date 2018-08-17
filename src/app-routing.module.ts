import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {LoginPageComponent} from './app/login-page/login-page.component';
import {FrontPageComponent} from './app/front-page/front-page.component';
import {AdminGuard} from './app/guards/admin.guard';
import {SubscriberGuard} from './app/guards/subscriber.guard';

const routes: Routes = [
  {path: '', loadChildren: './app/front-page/front-page.module#FrontPageModule'},
  {path: 'login', component: LoginPageComponent},
  {path: 'admin', loadChildren: './app/admin-page/admin-page.module#AdminPageModule', canActivate: [AdminGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

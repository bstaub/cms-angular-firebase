import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {LoginPageComponent} from './app/login-page/login-page.component';
import {PagesListComponent} from './app/pages-list/pages-list.component';
import {HomePageComponent} from './app/home-page/home-page.component';
import {AdminGuard} from './app/guards/admin.guard';
import {SubscriberGuard} from './app/guards/subscriber.guard';

const routes: Routes = [
  {path: '', component: HomePageComponent},
  {path: 'login', component: LoginPageComponent},
  {path: 'article', component: PagesListComponent, canActivate: [SubscriberGuard]},
  {path: 'admin', loadChildren: './app/admin-page/admin-page.module#AdminPageModule', canActivate: [AdminGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

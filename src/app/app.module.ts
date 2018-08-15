import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgModule} from '@angular/core';

import {AngularFireModule} from 'angularfire2';
import {AngularFireDatabaseModule} from 'angularfire2/database';

import {AppComponent} from './app.component';
import {environment} from '../environments/environment';
import {PagesListComponent} from './pages-list/pages-list.component';
import {AppRoutingModule} from '../app-routing.module';
import {LoginPageComponent} from './login-page/login-page.component';
import {AfService} from './providers/af.service';
import {AngularFireAuthModule} from 'angularfire2/auth';
import {AngularFirestore, AngularFirestoreModule} from 'angularfire2/firestore';
import {NavbarComponent} from './navbar/navbar.component';
import {HomePageComponent} from './home-page/home-page.component';
import {AdminGuard} from './guards/admin.guard';
import {SubscriberGuard} from './guards/subscriber.guard';
import {MaterialModule} from './material.module';
import {MenuService} from './service/menu.service';


@NgModule({
  declarations: [
    AppComponent,
    PagesListComponent,
    LoginPageComponent,
    NavbarComponent,
    HomePageComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AppRoutingModule,
    AngularFireAuthModule,
    AngularFirestoreModule,
    MaterialModule
  ],
  providers: [AfService, AdminGuard, SubscriberGuard, MenuService],
  bootstrap: [AppComponent]
})
export class AppModule {
}

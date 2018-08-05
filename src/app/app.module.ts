import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AngularFireModule} from 'angularfire2';
import {AngularFireDatabaseModule} from 'angularfire2/database';

import {AppComponent} from './app.component';
import {environment} from '../environments/environment';
import {PagesListComponent} from './pages-list/pages-list.component';
import {AppRoutingModule} from '../app-routing.module';
import { LoginPageComponent } from './login-page/login-page.component';
import {AfService} from './providers/af.service';
import {AngularFireAuthModule} from 'angularfire2/auth';
import {AngularFirestore, AngularFirestoreModule} from 'angularfire2/firestore';

@NgModule({
  declarations: [
    AppComponent,
    PagesListComponent,
    LoginPageComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AppRoutingModule,
    AngularFireAuthModule,
    AngularFirestoreModule
  ],
  providers: [AfService],
  bootstrap: [AppComponent]
})
export class AppModule {
}

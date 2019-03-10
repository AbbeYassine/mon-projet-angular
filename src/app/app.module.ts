import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {MonPremierComponent} from './mon-premier/mon-premier.component';
import {AppareilComponent} from './appareil/appareil.component';
import {FormsModule} from '@angular/forms';
import {AppareilService} from './services/appareil.service';
import {AppareilViewComponent} from './appareil-view/appareil-view.component';
import {RouterModule, Routes} from '@angular/router';
import {AuthComponent} from './auth/auth.component';
import {AuthService} from './services/auth.service';
import { AppareilDetailComponent } from './appareil-detail/appareil-detail.component';

const appRoutes: Routes = [
  {
    path: 'appareils',
    component: AppareilViewComponent
  },
  {
    path: 'auth',
    component: AuthComponent
  },
  {
    path: '',
    component: AppareilViewComponent
  },
  {
    path: 'appareil/:appareilId',
    component: AppareilDetailComponent
  }
];


@NgModule({
  declarations: [
    AppComponent,
    MonPremierComponent,
    AppareilComponent,
    AppareilViewComponent,
    AuthComponent,
    AppareilDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    AppareilService,
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}

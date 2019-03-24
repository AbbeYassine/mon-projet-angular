import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { MonPremierComponent } from './mon-premier/mon-premier.component';
import { AppareilComponent } from './appareil/appareil.component';
import { AppareilService } from './services/appareil.service';
import { AppareilViewComponent } from './appareil-view/appareil-view.component';
import { Routes, RouterModule } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { AuthService } from './services/auth.service';
import { AppareilDetailComponent } from './appareil-detail/appareil-detail.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AuthGuard } from './auth.guard';
import { AppareilFormComponent } from './appareil-form/appareil-form.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';

//Routes
const appRoutes : Routes = [
  {
    path: 'auth',
    component : AuthComponent
  },
  {
    path: 'appareils',
    component : AppareilViewComponent,
    canActivate : [AuthGuard]
  },
  {
    path : 'appareil/add',
    component : AppareilFormComponent,
    canActivate : [AuthGuard]
  },
  {
    path : 'appareil/edit/:id',
    component : AppareilFormComponent,
    canActivate : [AuthGuard]
  },
  {
    path: '',
    component : AppareilViewComponent,
    canActivate : [AuthGuard]
  },
  {
     path : 'appareil/:id' ,
     component : AppareilDetailComponent,
     canActivate : [AuthGuard]

  },
  {
    path : 'not-found',
    component : PageNotFoundComponent
  },
  {
    path : '**',
    redirectTo : 'not-found'
  }
]

@NgModule({
  declarations: [
    AppComponent,
    MonPremierComponent,
    AppareilComponent,
    AppareilViewComponent,
    AuthComponent,
    AppareilDetailComponent,
    PageNotFoundComponent,
    AppareilFormComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    AppareilService,
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

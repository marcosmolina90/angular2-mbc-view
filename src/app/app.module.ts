import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, Http, XHRBackend, RequestOptions } from '@angular/http';
import { MaterializeModule } from 'angular2-materialize';
import {ToastyModule} from 'ng2-toasty';
import {ActivatedRoute, Router} from '@angular/router';

import {AppCollumnService} from './shared/app-collumn.service';
import {AuthService} from './login/auth.service';
import {BaseRestService} from './shared/base-rest.service';
import {AlertService} from './shared/alert.service';

import {AppRoutingModule} from './app.routing.module';
import {AuthGuard} from './guards/auth.guard';

import {httpFactory} from './http.factory';
import {InterceptedHttp} from './http.interceptor';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { HomeComponent } from './home/home.component';
import { ListComponent } from './list/list.component';


import { StandardModule } from './standard/standard.module';
import { StandardRoutingModule } from './standard/standard.routing.module';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HomeComponent,
    ListComponent,
    LoginComponent,
    LogoutComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    StandardModule,
    ToastyModule.forRoot()
  ],
  exports: [ToastyModule],
  providers: [BaseRestService, AlertService, AppCollumnService, AuthService, AuthGuard,  {
    provide : Http,
    useFactory: (xhrBackend: XHRBackend,
    requestOptions:  RequestOptions,
    router: Router,
    activatedRoute: ActivatedRoute) =>  new InterceptedHttp(xhrBackend, requestOptions, router, activatedRoute),
    deps:  [XHRBackend, RequestOptions, Router, ActivatedRoute]}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

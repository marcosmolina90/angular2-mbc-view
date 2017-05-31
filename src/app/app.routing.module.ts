import { NgModule } from '@angular/core';
import {ModuleWithProviders} from '@angular/core';
import {RouterModule, Routes, CanActivate} from '@angular/router';
import {AuthGuard} from './guards/auth.guard';


import {HomeComponent} from './home/home.component';
import {ListComponent} from './list/list.component';
import {LoginComponent} from './login/login.component';
import {LogoutComponent} from './logout/logout.component';

const appRoutes: Routes  = [
  {path : '' , component : HomeComponent, canActivate: [AuthGuard], canLoad: [AuthGuard]},
  {path: 'list/:entidade', component: ListComponent, canActivate: [AuthGuard], canLoad: [AuthGuard]},
  {path: 'login', component: LoginComponent, canActivate: [AuthGuard], canLoad: [AuthGuard]},
  {path: 'logout', component: LogoutComponent}
];


@NgModule({
    imports: [RouterModule.forRoot(appRoutes, {useHash: false})],
    exports: [RouterModule]
})
export class AppRoutingModule {}

import { NgModule } from '@angular/core';
import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {AuthGuard} from '../guards/auth.guard';
import {MunicipioComponent} from './municipio/municipio.component';
import {EstadoComponent} from './estado/estado.component';
import {PaisComponent} from './pais/pais.component';

const standardRoutes: Routes  = [
  {path: 'municipio/:id', component: MunicipioComponent, canActivate: [AuthGuard], canLoad: [AuthGuard]},
  {path: 'estado/:id', component: EstadoComponent,  canActivate: [AuthGuard], canLoad: [AuthGuard]},
  {path: 'pais/:id', component: PaisComponent,  canActivate: [AuthGuard], canLoad: [AuthGuard]},
];


@NgModule({
    imports: [RouterModule.forChild(standardRoutes)],
    exports: [RouterModule]
})
export class StandardRoutingModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterializeModule } from 'angular2-materialize';
import {ToastyModule} from 'ng2-toasty';
import {StandardRoutingModule} from './standard.routing.module';

import {AppCollumnService} from '../shared/app-collumn.service';
import {BaseRestService} from '../shared/base-rest.service';
import {AlertService} from '../shared/alert.service';

import {EstadoComponent} from './estado/estado.component';
import {MunicipioComponent} from './municipio/municipio.component';
import {PaisComponent} from './pais/pais.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpModule,
    StandardRoutingModule,
    ToastyModule.forRoot()
  ],
  declarations: [
    EstadoComponent,
    MunicipioComponent,
    PaisComponent
  ],
  providers: [BaseRestService, AlertService, AppCollumnService]
})
export class StandardModule { }

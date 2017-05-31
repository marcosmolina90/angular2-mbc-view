import { Injectable } from '@angular/core';

import { Http } from '@angular/http';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Rx';


@Injectable()
export class BaseRestService {

 baseUrl = 'http://apps2.maxiconsystems.com.br:8086';

 constructor(private http: Http) {  }

  totalEntity(entidade) {
    const url = this.baseUrl + '/mbcloud/api/' + entidade + '/totalEntity';
    return this.http.get(url).map(res => res.json());
  }

  listAll(entidade, parametros) {
    const url = this.baseUrl + '/mbcloud/api/' + entidade + parametros;
    return this.http.get(url).map(res => res.json());
  }

  getter(entidade, servico, parametros) {
    const url = this.baseUrl + '/mbcloud/api/' + entidade + '/' + servico + parametros;
    return this.http.get(url).map(res => res.json());
  }

  salvar(entidade, objeto) {
    const url = this.baseUrl + '/mbcloud/api/' + entidade + '/salvar';
    return this.http.post(url, objeto).map(res => res.json());
  }

  post(entidade, metodo, objeto) {
    const url = this.baseUrl + '/mbcloud/api/' + entidade + '/' + metodo;
    return this.http.post(url, objeto).map(res => res.json());
  }


}

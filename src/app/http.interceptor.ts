import {Injectable} from '@angular/core';
import { ConnectionBackend, RequestOptions, Request, RequestOptionsArgs, Response, Http, Headers} from '@angular/http';
import {ActivatedRoute, Router} from '@angular/router';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import 'rxjs/add/observable/empty';
import {environment} from '../environments/environment';

@Injectable()
export class InterceptedHttp extends Http {
  constructor(backend: ConnectionBackend,
              defaultOptions: RequestOptions,
              private router: Router,
              private activatedRoute: ActivatedRoute) {
    super(backend, defaultOptions);
  }


  intercept(observable: Observable<Response>): Observable<Response> {
    return observable.catch((err: Response, caught: Observable<any>) => {
      if (err.status === 401) {
        this.router.navigate(['/login']);
        return Observable.throw('401 Unauthorized');
      }
      console.log('ERRO ' + err.status, err);
      return Observable.throw(caught);
    });
  }


  get(url: string, options?: RequestOptionsArgs): Observable<Response> {
    return this.intercept(super.get(url, this.getRequestOptionArgs(options)));
  }

  post(url: string, body: string, options?: RequestOptionsArgs): Observable<Response> {
    url = this.updateUrl(url);
    return this.intercept(super.post(url, body, this.getRequestOptionArgs(options)));
  }

  put(url: string, body: string, options?: RequestOptionsArgs): Observable<Response> {
    url = this.updateUrl(url);
    return this.intercept(super.put(url, body, this.getRequestOptionArgs(options)));
  }

  delete(url: string, options?: RequestOptionsArgs): Observable<Response> {
    url = this.updateUrl(url);
    return this.intercept(super.delete(url, this.getRequestOptionArgs(options)));
  }

  private updateUrl(req: string) {
    return req;
  }

  private getRequestOptionArgs(request?: RequestOptionsArgs): RequestOptionsArgs {
    if (request == null) {
      request = new RequestOptions();
    }
    if (request.headers == null) {
      request.headers = new Headers();
    }


    if (sessionStorage.getItem('userName') !== undefined &&
            sessionStorage.getItem('userName') !== null &&
            sessionStorage.getItem('userName') !== 'null') {
               request.headers.append('userName', sessionStorage.getItem('userName'));
           }
    if (sessionStorage.getItem('agregado') !== undefined &&
    sessionStorage.getItem('agregado') !== null &&
    sessionStorage.getItem('agregado') !== 'null') {
      request.headers.append('agregado', sessionStorage.getItem('agregado'));
    }

    const token = localStorage.getItem('tokenInfo');
    const keepLogged = localStorage.getItem('keepLogged');
    if (keepLogged !== undefined && keepLogged != null && keepLogged === 'true') {
      request.headers.append('keepLogged', 'true');
    } else {
      request.headers.append('keepLogged', 'false');
    }

    if (token !== undefined && token !== null) {
      request.headers.append('tokenInfo', token);
    }
    // TODO MAM
    // if ($rootScope.viewID == undefined) {
    // var raw = Math.floor((1 + Math.random()) * 0x10000).toString(16);
    // $rootScope.viewID = raw;
    // }
    // request.headers.viewID = $rootScope.viewID;

    request.headers.append('idioma', localStorage.getItem('idioma'));

    // TODO MAM
    // var orig = $location.path();
    // if (orig == undefined || orig == null || orig.length == 0) {
    // request.headers.sourceOrigem = '/init';
    // } else {
    // request.headers.sourceOrigem = location.path();
    // }

    if (!localStorage.getItem('currentUser')) {
      localStorage.setItem('currentUser', sessionStorage.getItem('userName'));
    }


    request.headers.append('Content-Type', 'application/json');

    return request;
  }
}

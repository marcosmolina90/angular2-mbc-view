import {XHRBackend, Http, RequestOptions} from '@angular/http';
import {InterceptedHttp} from './http.interceptor';
import {ActivatedRoute, Router} from '@angular/router';


export function httpFactory(xhrBackend: XHRBackend, requestOptions: RequestOptions, router: Router, activatedRoute: ActivatedRoute): Http {
    return new InterceptedHttp(xhrBackend, requestOptions, router, activatedRoute);
}

import { Observable } from 'rxjs/Rx';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, CanLoad, Route } from '@angular/router';

import { AuthService } from './../login/auth.service';

@Injectable()
export class AuthGuard implements CanActivate, CanLoad {

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean>|boolean {
    return this.verificarAcesso(state);
  }

  private verificarAcesso(route: RouterStateSnapshot) {
    if (this.authService.usuarioEstaAutenticado(route.url)) {
      return true;
    }
    this.router.navigate(['/login'], { queryParams: { forward: route.url } });
    return false;
  }

  canLoad(route: RouterStateSnapshot): Observable<boolean>|Promise<boolean>|boolean {
    if (this.authService.usuarioEstaAutenticado(route.url)) {
      return true;
    }
    this.router.navigate(['/login'], { queryParams: { forward: route.url } });
    return false;
  }

}

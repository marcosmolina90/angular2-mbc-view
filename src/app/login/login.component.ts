import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs/RX';


import { AuthService } from './auth.service';
import { BaseRestService } from '../shared/base-rest.service';
import { AlertService } from '../shared/alert.service';


import { Usuario } from './usuario';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit, OnDestroy {

  private usuario: Usuario = new Usuario();
  inscricao: Subscription;
  redirect = false;
  forward: string;
  possuiToken: boolean;

  constructor(private router: Router,
    private activatedRoute: ActivatedRoute,
    private authService: AuthService,
    private baseRest: BaseRestService,
    private alertService: AlertService) {

  }

  ngOnInit() {
    this.inscricao = this.activatedRoute.queryParams.subscribe((param: any) => {
      this.forward = param['forward'];
      this.redirect = param['redirect'];
    });

    this.getUserLoggedIn();
  }

  ngOnDestroy() {
    this.inscricao.unsubscribe();
  }


  getUserLoggedIn() {
    let idioma = localStorage.getItem('idioma');
    if (idioma === undefined || idioma == null) {
      idioma = navigator.language;
      if (idioma === undefined || idioma == null) {
        idioma = 'en';
      } else if (idioma.indexOf('pt') > -1) {
        idioma = 'pt';
      } else {
        idioma = 'en';
      }
      localStorage.setItem('idioma', idioma);
    }
    // TODO use(idioma);
    // TODO $scope.initKeepLogged();

    if (this.redirect !== undefined && this.redirect !== null && this.redirect === false) {
      // TODO $scope.loadLogoAgregado();
      // TODO $scope.possuiToken = false;
      return;
    }
    let token = localStorage.getItem('tokenInfo');
    const keepLogged = localStorage.getItem('keepLogged');
    if (keepLogged === 'false') {
      token = null;
    }
    if (token !== undefined && token != null && token.length > 0) {
      this.possuiToken = true;
    } else {
      // TODO $scope.loadLogoAgregado();
      this.possuiToken = false;
      this.cleanLocalResources();
      return;
    }
    this.baseRest.getter('login', '', '?token=' + token + '&checkUser=false').subscribe(data => {

      if (data.resultyType !== 'SUCCESS') {
        this.cleanLocalResources();
        this.possuiToken = false;
        return;
      } else {
        this.baseRest.getter('usuario', 'nmUsuarioLogado', '').subscribe(usr => {
          this.authService.usuario = usr;
          sessionStorage.setItem('userName', this.authService.usuario.login);
          sessionStorage.setItem('agregado', this.authService.usuario.agregado);
          localStorage.setItem('userName', this.authService.usuario.login);
          localStorage.setItem('agregado', this.authService.usuario.agregado);
          if (this.forward !== undefined && this.forward !== null && this.forward.length > 0) {
            this.router.navigate([this.forward]);
          } else {
            this.router.navigate(['/']);
          }
        });

      }
    });
  }

  cleanLocalResources() {
    localStorage.removeItem('tokenInfo');
    localStorage.removeItem('userName');
  }

  fazerLogin() {
    console.log('fazer login');
    localStorage.setItem('keepLogged', '' + this.usuario.keepLogged);
    this.usuario.userName = this.usuario.userName.toLowerCase().replace(/\s+/g, '');
    this.baseRest.post('login', 'auth', this.usuario).subscribe(data => {
      if (data.resultyType === 'SUCCESS') {
        localStorage.setItem('tokenInfo', data.token);
        localStorage.setItem('userName', data.userName);
        this.authService.usuarioAutenticado = true;
        this.baseRest.getter('usuario', 'nmUsuarioLogado', '').subscribe(usr => {
          this.authService.usuario = usr;
          sessionStorage.setItem('userName', this.authService.usuario.login);
          sessionStorage.setItem('agregado', this.authService.usuario.agregado);
          localStorage.setItem('userName', this.authService.usuario.login);
          localStorage.setItem('agregado', this.authService.usuario.agregado);
          if (this.forward !== undefined && this.forward != null && this.forward.length > 0) {
            console.log(this.forward);
            this.router.navigate([this.forward]);
          } else {
            this.router.navigate(['/']);
          }
        });

      } else if (data.message === 'ERRO_LICENCA') {
        this.alertService.addToast('Erro', 'Erro Licença', 'error');
        localStorage.setItem('tokenInfo', '');
        sessionStorage.setItem('userName', '');
        sessionStorage.setItem('agregado', '');
        localStorage.setItem('userName', '');
        localStorage.setItem('agregado', '');
        this.authService.usuarioAutenticado = false;
        this.router.navigate(['/licenca']);
      } else {
        this.authService.usuarioAutenticado = false;
        localStorage.setItem('tokenInfo', '');
        sessionStorage.setItem('userName', '');
        sessionStorage.setItem('agregado', '');
        localStorage.setItem('userName', '');
        localStorage.setItem('agregado', '');
        this.alertService.addToast('Erro', data.message.replace('MESSAGE:', ''), 'error');
      }
    });
  }

}

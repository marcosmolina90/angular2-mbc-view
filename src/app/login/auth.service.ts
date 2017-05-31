import { Injectable, EventEmitter, OnInit } from '@angular/core';
import { Router, RouterState} from '@angular/router';
import { Usuario } from './usuario';

import {AlertService} from '../shared/alert.service';
import {BaseRestService} from '../shared/base-rest.service';

@Injectable()
export class AuthService implements OnInit {

  usuarioAutenticado = false;
  usuario;

  mostrarMenuEmitter = new EventEmitter<boolean>();

  ngOnInit() {
  }

  constructor() {  }

  getuserLoggedIn() {
  }

  fazerLogin(usuario: Usuario, forward: string) {


  }

  usuarioEstaAutenticado(url: string) {
    if (url.startsWith('/login')) {
      this.mostrarMenuEmitter.emit(false);
      return true;
    }

    const userName = sessionStorage.getItem('userName');
    if (userName !== undefined && userName != null && userName.length > 0) {
      this.mostrarMenuEmitter.emit(true);
      return true;
    } else {
      this.mostrarMenuEmitter.emit(false);
      return false;
    }
  }
}

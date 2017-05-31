import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

import {AuthService} from '../login/auth.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private router: Router,
              private activatedRoute: ActivatedRoute,
              private authService: AuthService) { }

  ngOnInit() {
    localStorage.setItem('tokenInfo', '');
    sessionStorage.setItem('userName', '');
    sessionStorage.setItem('agregado', '');
    localStorage.setItem('userName', '');
    localStorage.setItem('agregado', '');
    this.authService.usuarioAutenticado = false;
    this.authService.usuario = {};
    this.router.navigate(['/login']);
  }

}

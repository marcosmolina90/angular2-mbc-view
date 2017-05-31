import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Subscription} from 'rxjs/RX';

import {BaseRestService} from '../../shared/base-rest.service';
import { AlertService } from '../../shared/alert.service';

import {Estado} from './estado';

@Component({
  selector: 'app-estado',
  templateUrl: './estado.component.html',
  styleUrls: ['./estado.component.css']
})
export class EstadoComponent implements OnInit {

  estado: Estado = new Estado();
  inscricao: Subscription;
  id: number;
  entidade = 'estado';
  paises = [];

  constructor(private route: ActivatedRoute,
    private router: Router,
    private baseRestService: BaseRestService,
    private alertService: AlertService) { }

  ngOnInit() {
    this.baseRestService.getter('pais', '', '?orderBy=descricao').subscribe(data => this.paises = data);
    this.inscricao = this.route.params.subscribe((params: any) => {
      this.id = params['id'];
      this.baseRestService.getter(this.entidade, 'find', '?id=' + this.id).subscribe(data => {
        this.estado = data;
        if (this.estado == null) {
          this.alertService.addToast('Alerta', 'Estado (' + this.id + ') não encontrado', 'error');
          this.router.navigate(['/list', this.entidade]);
        } else {
          console.log(this.estado);
          this.estado.idPais = this.estado.pais.id ;
        }
      });

    });
  }

  gOnDestroy() {
    this.inscricao.unsubscribe();
    this.estado = new Estado();
  }

  salvar() {
    this.baseRestService.salvar(this.entidade, this.estado).subscribe(data => {
      if (data.erro !== undefined || (data.erro !== null && data.erro.lenght > 0)) {
        this.alertService.addToast('Erro', data.erro, 'error');
      } else {
        this.alertService.addToast('Sucesso', 'Estado Salvo com sucesso', 'success');
      }
    });
  }
}

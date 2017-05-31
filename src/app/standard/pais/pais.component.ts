import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs/RX';

import { BaseRestService } from '../../shared/base-rest.service';
import { AlertService } from '../../shared/alert.service';


@Component({
  selector: 'app-pais',
  templateUrl: './pais.component.html',
  styleUrls: ['./pais.component.css']
})
export class PaisComponent implements OnInit {

  pais = {};
  inscricao: Subscription;
  id: number;
  entidade = 'pais';


  constructor(private route: ActivatedRoute,
    private router: Router,
    private baseRestService: BaseRestService,
    private alertService: AlertService) {
  }
  ngOnInit() {
    this.inscricao = this.route.params.subscribe((params: any) => {
      this.id = params['id'];
      this.baseRestService.getter(this.entidade, 'find', '?id=' + this.id).subscribe(data => this.pais = data);
      if (this.pais == null) {
        this.alertService.addToast('Alerta', 'Pais (' + this.id + ') não encontrado', 'error');
        this.router.navigate(['/list', this.entidade]);
      }
    });
  }

  gOnDestroy() {
    this.inscricao.unsubscribe();
    this.pais = {};
  }

  salvar() {
    this.baseRestService.salvar(this.entidade, this.pais).subscribe(data => {
      if (data.erro !== undefined || (data.erro !== null && data.erro.lenght > 0)) {
        this.alertService.addToast('Erro', data.erro, 'error');
      } else {
        this.alertService.addToast('Sucesso', 'Pais Salvo com sucesso', 'success');
      }
    });
  }
}

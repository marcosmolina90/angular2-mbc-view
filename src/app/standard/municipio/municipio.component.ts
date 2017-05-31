import { Component, OnInit, OnDestroy } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Subscription} from 'rxjs/RX';

import {BaseRestService} from '../../shared/base-rest.service';
import { AlertService } from '../../shared/alert.service';

@Component({
  selector: 'app-municipio',
  templateUrl: './municipio.component.html',
  styleUrls: ['./municipio.component.css']
})
export class MunicipioComponent implements OnInit, OnDestroy {

  id;
  municipio = {};
  estados = [];
  inscricao: Subscription;
  entidade = 'municipio';

  constructor(private route: ActivatedRoute,
              private router: Router,
              private baseRestService: BaseRestService,
              private alertService: AlertService) { }

  ngOnInit() {
      this.baseRestService.getter('estado', '', '?orderBy=estado').subscribe(data => this.estados = data);
      this.inscricao = this.route.params.subscribe((params: any) => {
        this.id = params['id'];
        this.baseRestService.getter(this.entidade, 'find', '?id=' + this.id).subscribe(data => this.municipio = data);
        if (this.municipio ==  null) {
            this.alertService.addToast('Alerta', 'Mnunicipio (' + this.id + ') não encontrado',  'error');
            this.router.navigate(['/list', this.entidade]);
        }
      });
  }

  ngOnDestroy() {
    this.inscricao.unsubscribe();
    this.municipio = {};
  }

  salvar() {
    this.baseRestService.salvar('municipio', this.municipio).subscribe(data => {
      if (data.erro !== undefined || (data.erro !== null && data.erro.lenght > 0)) {
        this.alertService.addToast('Erro', data.erro, 'error');
      }else {
          this.alertService.addToast('Sucesso', 'Municipio Salvo com sucesso', 'success') ;
      }
    });
  }
}

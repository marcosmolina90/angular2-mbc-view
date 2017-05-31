import { Component, OnInit, DoCheck, OnDestroy } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Subscription} from 'rxjs/RX';
import { XHRBackend, RequestOptions } from '@angular/http';

import {BaseRestService} from '../shared/base-rest.service';
import {AppCollumnService} from '../shared/app-collumn.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit, OnDestroy {


  pageSize = 10;

  orderBy = 'codigo';
  entidade: string;
  oldEntidade = '';

  inscricaoQParam: Subscription;
  inscricaoParam: Subscription;

  registros = [];
  collumns = [];
  pagSelect = 1;
  paginas = [];
  total = 0;


  constructor(private baseRestService: BaseRestService,
    private appCollumn: AppCollumnService,
    private route: ActivatedRoute,
    private router: Router) { }


  ngOnInit() {
    this.inscricaoParam = this.route.params.subscribe((params: any) => {
      const vload: boolean = this.entidade === undefined;
      this.entidade = params['entidade'];
      this.total = 0;
      if (!vload) {
        this.filter();
      }
    });


    this.inscricaoQParam = this.route.queryParams.subscribe((queryParams: any) => {
      this.pagSelect = queryParams.pagSelect == null ? 1 : queryParams.pagSelect;
      this.pageSize = queryParams.pageSize == null ? 10 : queryParams.pageSize;
      this.orderBy = queryParams.orderBy == null ? 'codigo' : queryParams.orderBy;
      this.filter();
    });
  }

  getCollumns() {
    this.collumns = this.appCollumn.getCollum(this.entidade);
  }

  getTotalEntidade() {
    this.baseRestService.totalEntity(this.entidade).subscribe(data => {
      this.total = data;
      this.filter();
    });
  }

  go(page) {
    this.router.navigate(['/list', this.entidade], {
      queryParams: {
        pagSelect: page,
        pageSize: this.pageSize,
        orderBy: this.orderBy
      }
    });

  }

  filter() {
    if (this.total === 0) {
      this.getCollumns();
      this.getTotalEntidade();
    } else {
      this.paginas = [];
      const totPag: number = this.total / this.pageSize;
      const min: number = this.pagSelect - 5;
      const max: number = min + 8;

      for (let i = 0; i < totPag; i++) {

        if (i > min  && i < max) {
          this.paginas.push(i + 1);
        }
      }
      const first = this.pagSelect * this.pageSize - this.pageSize;
      const filter = '?first=' + first + '&pageSize=' + this.pageSize + '&orderBy=' + this.orderBy;
      this.baseRestService.listAll(this.entidade, filter).subscribe(data => this.registros = data);
    }
  }

  select(id) {
    this.router.navigate(['/' + this.entidade, id]);
  }

  ngOnDestroy() {
    this.inscricaoQParam.unsubscribe();
    this.inscricaoParam.unsubscribe();
    this.registros = [];
    this.collumns = [];
  }
}

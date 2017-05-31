import { Injectable } from '@angular/core';

@Injectable()
export class AppCollumnService {

  amostraGrao= [{ 'title': 'Descrição', 'collumn': 'descricao' },
  { 'collumn': 'dsSigla', 'title': ('SIGLA'), 'style': 'text-align : left' },
  {
    'title': 'Codigo',
    'collumn': 'codigo',
    'style': 'text-align : center'
  }];

  areaTalhao = [{
    title: ('AREA_TALHAO'),
    collumn: 'descricao',
  }, {
    title: ('TALHAO'),
    collumn: 'dsTalhao',
  }, {
    title: ('TAMANHO') + '(HT)',
    collumn: 'areaTotal.valor',
  }];
  banco = ['Banco do Brasil', 'Banco do Nordeste', 'Banco Safra', 'Banco Votorantim', 'Banrisul', 'BNDES', 'Bradesco',
    'BTG Pactual', 'Caixa Econômica Federal', 'Citibank Brasil', 'HSBC Brasil', 'Itaú Unibanco', 'Santander Brasil', 'Outro'];
  bandeira = ['Visa', 'Mastercard', 'American Express', 'Elo', 'HiperCard', 'Discover Network', 'Outras bandeiras'];

  blocoManejo = [{
    collumn: 'nrBloco',
    title: ('BLOCO'),
    style: 'text-align : center'
  }, {
    collumn: 'descricao',
    title: ('DESCRICAO'),
    style: 'text-align : left'
  }, {
    collumn: 'nrOsInicial',
    title: ('INICIO'),
    style: 'text-align : center'
  }, {
    collumn: 'nrOsFinal',
    title: ('FIM'),
    style: 'text-align : center'
  }];
  centroCusto = [{
    collumn: 'descricao',
    title: ('CENTRO_CUSTO'),
    style: 'text-align : left'
  }, {
    collumn: 'ativo',
    title: ('ATIVO'),
    style: 'text-align : center'
  }];
  clifor = [{
    collumn: 'nmFantasia',
    title: ('NOME'),
    style: 'text-align : left'

  }, {
    collumn: 'nmClifor',
    title: ('RAZAO_SOCIAL'),
    style: 'text-align : left'
  }, {
    collumn: 'nrCpfcnpj',
    title: 'CNPJ/CPF',
    style: 'text-align : center'
  }];
  contaBancaria = [{
    collumn: 'descricao',
    title: ('DESCRICAO'),
    style: 'text-align : left'
  }, {
    collumn: 'banco',
    title: ('BANCO'),
    style: 'text-align : left'
  }, {
    collumn: 'agencia',
    title: ('AGENCIA'),
    style: 'text-align : left'
  }, {
    collumn: 'conta',
    title: ('CONTA'),
    style: 'text-align : left'
  }, {
    collumn: 'dsTitular',
    collumnSelect: 'titular.nmClifor',
    title: ('TITULAR'),
    style: 'text-align : left'
  }, {
    collumn: 'ativo',
    title: ('ATIVO'),
    style: 'text-align : center'
  }];


  contrato = [{
    collumn: 'codigo',
    title: ('NUMBER'),
    style: 'text-align : center'
  }, {
    collumn: 'codigoExt',
    title: 'Nr. ' + ('FORNECEDOR'),
    style: 'text-align : center'
  }, {
    collumn: 'nmEmpresa',
    collumnSelect: 'empresa.nmEmpresa',
    title: ('EMPRESA'),
    style: 'text-align : left'
  }, {
    collumn: 'nmClifor',
    collumnSelect: 'clifor.nmClifor',
    title: ('FORNECEDOR'),
    style: 'text-align : left'
  }, {
    collumn: 'dsEndereco',
    collumnSelect: 'endereco.descricao',
    title: ('ENDERECO'),
    style: 'text-align : left'
  }, {
    collumn: 'dsItem',
    collumnSelect: 'item.descricao',
    title: ('ITEM'),
    style: 'text-align : left'
  }, {
    collumn: 'dsTipoContrato',
    collumnSelect: 'tipoContrato.descricao',
    title: ('TIPO'),
    style: 'text-align : left'
  }, {
    collumn: 'vlUnitarioStr',
    collumnSelect: 'vlUnitario',
    title: ('VALOR_UNITARIO'),
    style: 'text-align : right'
  }, {
    collumn: 'psContratadoStr',
    collumnSelect: 'psContratado',
    title: ('PESO_CONTRATADO'),
    style: 'text-align : right'
  }, {
    collumn: 'saldoStr',
    collumnSelect: 'psContratado',
    title: ('SALDO'),
    style: 'text-align : right'
  }];

  contaGerencial = [{
    collumn: 'codigo',
    title: ('CONTA_GERENCIAL'),
    style: 'text-align : left'
  }, {
    collumn: 'descricao',
    title: ('DESCRICAO'),
    style: 'text-align : left'
  }, {
    collumn: 'cdContaPai',
    collumnSelect: 'contaPai.codigo',
    title: ('CONTA_PAI'),
    style: 'text-align : left'
  }, {
    collumn: 'dsContaPai',
    collumnSelect: 'contaPai.descricao',
    title: ('DESCRICAO') + ' ' + ('CONTA_PAI'),
    style: 'text-align : left'
  }, {
    collumn: 'ativo',
    title: ('ATIVO'),
    style: 'text-align : center'
  }];

  cultivar = [{
    collumn: 'dsAbreviada',
    title: ('ABREVIACAO'),
    style: 'text-align : center'
  }, {
    collumn: 'descricao',
    title: ('CULTIVAR'),
    style: 'text-align : left'
  }, {
    collumn: 'dsItem',
    collumnSelect: 'item.descricao',
    title: ('ITEM'),
    style: 'text-align : left'
  }, {
    collumn: 'cultura',
    collumn2: 'descricao',
    collumnSelect: 'cultura.descricao',
    title: ('CULTURA'),
    style: 'text-align : left'
  }, {
    collumn: 'ativo',
    title: ('ATIVO'),
    style: 'text-align : center'
  }];

  cultura = [{
    title: ('CULTURA'),
    collumn: 'descricao'
  }, {
    title: ('CODIGO'),
    collumn: 'codigo',
    style: 'text-align : center'
  }, {
    collumn: 'ativo',
    title: ('ATIVO'),
    style: 'text-align : center'
  }];

  deposito = [{
    collumn: 'descricao',
    title: 'Deposito',
    style: 'text-align : left'
  }, {
    collumn: 'empresa',
    collumn2: 'nmEmpresa',
    collumnSelect: 'empresa.nmEmpresa',
    title: 'Empresa',
    style: 'text-align : left'
  }];

  empresa = [{
    title: ('CODIGO'),
    collumn: 'codigo',
    style: 'text-align : center'
  }, {
    collumn: 'nmEmpresa',
    title: ('EMPRESA'),
    style: 'text-align : left'
  }, {
    collumn: 'clifor',
    collumn2: 'nmClifor',
    collumnSelect: 'clifor.nmClifor',
    title: ('CLIENTE') + '/' + ('FORNECEDOR'),
    style: 'text-align : left'
  }];

  estado = [{
    collumn: 'codigo',
    title: ('CODIGO'),
    style: 'text-align : center'

  }, {
    collumn: 'estado',
    title: ('ESTADO'),
    style: 'text-align : left'
  }, {
    collumn: 'sigla',
    title: ('SIGLA'),
    style: 'text-align : center'
  }];

  faseLavoura = [{
    title: ('CODIGO'),
    collumn: 'codigo'
  }, {
    title: ('FASE_LAVOURA'),
    collumn: 'descricao'
  }, {
    title: ('CODIGO'),
    collumn: 'cdFasePai',
    collumnSelect: 'fasePai.descricao'
  }, {
    title: ('ETAPA_LAVOURA'),
    collumn: 'dsFasePai',
    collumnSelect: 'fasePai.descricao'
  }];

  formaPagamento = [{
    collumn: 'tipo',
    collumn2: 'descricao',
    collumnSelect: 'tipo',
    title: ('TIPO'),
    style: 'text-align : center'
  }, {
    collumn: 'sigla',
    title: ('FORMA_PAGAMENTO'),
    style: 'text-align : center'
  }, {
    collumn: 'descricao',
    title: ('DESCRICAO'),
    style: 'text-align : left'
  }, {
    collumn: 'ativo',
    title: ('ATIVO'),
    style: 'text-align : center'
  }];


  grupoAmostra = [{
    title: ('GRUPO_AMOSTRA'),
    collumn: 'descricao'
  }, {
    title: ('CODIGO'),
    collumn: 'codigo',
    style: 'text-align : center'
  }];

  grupoDespesa = [{
    title: ('GRUPO_DESPESA'),
    collumn: 'descricao'
  }, {
    title: ('CODIGO'),
    collumn: 'codigo',
    style: 'text-align : center'
  }];


  grupoItem = [{
    collumn: 'descricao',
    title: ('DESCRICAO'),
    style: 'text-align : left'
  }, {
    collumn: 'cdContaGerencial',
    collumnSelect: 'contaGerencial.codigo',
    title: ('CONTA_GERENCIAL'),
    style: 'text-align : center'

  }, {
    collumn: 'dsContaGerencial',
    collumnSelect: 'contaGerencial.descricao',
    title: ('DESCRICAO') + ' ' + ('CONTA_GERENCIAL'),
    style: 'text-align : center'
  }, {
    collumn: 'ativo',
    title: ('ATIVO'),
    style: 'text-align : center'
  }

  ];

  item = [{
    collumn: 'descricao',
    collumnSelect: 'descricao',
    title: ('DESCRICAO'),
    style: 'text-align : left'
  }, {
    collumn: 'ativo',
    title: ('ATIVO'),
    style: 'text-align : center'
  }, {
    collumn: 'dsGrupo',
    collumnSelect: 'grupoItem.descricao',
    title: ('GRUPO_ITEM'),
  }, {
    collumn: 'dsSubGrupo',
    collumnSelect: 'subGrupoItem.descricao',
    title: ('SUB_GRUPO'),
  }, {
    collumn: 'dsContaGerencial',
    collumnSelect: 'contaGerencial.descricao',
    title: ('CONTA_GERENCIAL'),
  }];


  lancamento = [{
    title: ('CODIGO'),
    collumn: 'codigo',
    style: 'text-align : center'
  }, {
    title: ('DESCRICAO'),
    collumn: 'descricao'
  }, {
    title: ('TIPO'),
    collumn: 'tipo',
    collumn2: 'descricao',
    collumnSelect: 'origem',
    style: 'text-align : center'
  }, {
    title: ('ORIGEM'),
    collumn: 'origem',
    collumn2: 'descricao',
    collumnSelect: 'origem',
    style: 'text-align : center'
  }, {
    title: ('CLIENTE') + ' / ' + ('FORNECEDOR'),
    collumn: 'nmClifor',
    collumnSelect: 'clifor.nmClifor',
    style: 'text-align : center'
  }, {
    title: ('VALOR'),
    collumn: 'valor',
    style: 'text-align : rigth'
  }, {
    title: ('STATUS'),
    collumn: 'status',
    style: 'text-align : center'
  }];

  lavoura = [{
    title: ('LAVOURA'),
    collumn: 'descricao'
  }, {
    title: ('SAFRA'),
    collumn: 'descSafra',
    style: 'text-align : center'
  }, {
    title: ('PROPRIEDADE'),
    collumn: 'dsPropriedade',
    collumnSelect: 'propriedade.descricao',
    style: 'text-align : center'
  }];

  manejoLavoura = [{
    title: ('CODIGO'),
    collumn: 'codigo'
  }, {
    title: ('MANEJO'),
    collumn: 'descricao'
  }, {
    title: 'Cód. ' + ('BLOCO'),
    collumn: 'nrBlocoManejo',
    collumnSelect: 'blocoManejo.nrBloco',
  }, {
    title: ('BLOCO'),
    collumn: 'dsBlocoManejo',
    collumnSelect: 'blocoManejo.descricao'
  }];

  marcaVeiculo = [{
    collumn: 'descricao',
    title: ('MARCA_VEICULO'),
    style: 'text-align : left'
  }];

  modeloVeiculo = [{
    collumn: 'descricao',
    title: ('MODELO_VEICULO'),
    style: 'text-align : left'
  }, {
    collumn: 'dsMarca',
    collumnSelect: 'marcaVeiculo.descricao',
    title: ('MARCA_VEICULO'),
    style: 'text-align : left'
  }, {
    collumn: 'dsTipo',
    collumnSelect: 'tipoVeiculo.descricao',
    title: ('TIPO_VEICULO'),
    style: 'text-align : left'
  }, {
    collumn: 'dsViaTransporte',
    collumnSelect: 'viaTransporte.descricao',
    title: ('VIA_TRANSPORTE'),
    style: 'text-align : left'
  }];

  moeda = [{
    collumn: 'descricao',
    title: ('DESCRICAO'),
    style: 'text-align : left'
  }, {
    collumn: 'sigla',
    title: ('SIGLA'),
    style: 'text-align : center'
  }, {
    collumn: 'ativo',
    title: ('ATIVO'),
    style: 'text-align : center'
  }];

  movimento = [{
    collumn: 'codigo',
    title: 'Código',
    style: 'text-align : center'
  }, {
    collumn: 'descricao',
    title: ('DESCRICAO'),
    style: 'text-align : left'
  }, {
    collumn: 'tipo',
    collumn2: 'descricao',
    collumnSelect: 'tipo',
    title: ('TIPO'),
    style: 'text-align : center'
  }, {
    collumn: 'dsFornecedor',
    collumnSelect: 'fornecedor.nmClifor',
    title: ('FORNECEDOR'),
    style: 'text-align : left'
  }, {
    collumn: 'dsPropriedade',
    collumnSelect: 'propriedade.descricao',
    title: ('PROPRIEDADE'),
    style: 'text-align : left'
  }, {
    collumn: 'valorStr',
    collumnSelect: 'valor',
    title: ('VALOR'),
    style: 'text-align : right'
  }, {
    collumn: 'status',
    title: ('STATUS'),
    style: 'text-align : center'
  }];

  municipio = [{
    collumn: 'descricao',
    title: ('MUNICIPIO'),
    style: 'text-align : left'
  }, {
    collumn: 'codigo',
    title: ('CODIGO') + ' IBGE',
    style: 'text-align : center'
  }, {
    collumn: 'sgEstado',
    collumnSelect: 'estado.sigla',
    title: 'UF',
    style: 'text-align : center'
  }, {
    collumn: 'dsEstado',
    collumnSelect: 'estado.estado',
    title: ('ESTADO'),
    style: 'text-align : left'
  }, {
    collumn: 'dsPais',
    collumnSelect: 'estado.pais.descricao',
    title: ('PAIS'),
    style: 'text-align : left'
  }];

  pais = [{
    collumn: 'codigo',
    title: ('CODIGO'),
    style: 'text-align : center'
  }, {
    collumn: 'descricao',
    title: ('PAIS'),
    style: 'text-align : left'
  }];

  propriedade = [{
    collumn: 'descricao',
    title: ('PROPRIEDADE'),
    style: 'text-align : left'
  }, {
    collumn: 'nmEmpresa',
    collumnSelect: 'empresa.nmEmpresa',
    title: ('EMPRESA') + '/' + ('PROPRIETARIO'),
    style: 'text-align : left'
  }, {
    collumn: 'ativo',
    title: ('ATIVO'),
    style: 'text-align : center'
  }];

  recurso = [{
    collumn: 'nmRecurso',
    title: 'Recurso',
    style: 'text-align : center'
  }, {
    collumn: 'descricao',
    title: ('DESCRICAO'),
    style: 'text-align : left'
  }, {
    collumn: 'menu',
    title: 'Menu',
    style: 'text-align : left'
  }, {
    collumn: 'ativo',
    title: ('ATIVO'),
    style: 'text-align : center'
  }];

  subGrupoItem = [{
    collumn: 'descricao',
    title: ('DESCRICAO'),
    style: 'text-align : left'
  }, {
    collumn: 'cdContaGerencial',
    collumnSelect: 'contaGerencial.codigo',
    title: ('CONTA_GERENCIAL'),
    style: 'text-align : center'

  }, {
    collumn: 'dsContaGerencial',
    collumnSelect: 'contaGerencial.descricao',
    title: ('DESCRICAO') + ' ' + ('CONTA_GERENCIAL'),
    style: 'text-align : center'
  }, {
    collumn: 'ativo',
    title: ('ATIVO'),
    style: 'text-align : center'
  }];

  tabelaDesconto = [{
    title: ('TABELA_DESCONTO'),
    collumn: 'descricao'
  }, {
    title: ('CODIGO'),
    collumn: 'codigo',
    style: 'text-align : center'
  }];

  talhao = [{
    title: ('TALHAO'),
    collumn: 'descricao'
  }, {
    title: ('PROPRIEDADE'),
    collumn: 'dsPropriedade',
    collumnSelect: 'propriedade.descricao'
  }];

  tpCalculo = [{
    collumn: 'codigo',
    title: ('CODIGO'),
    style: 'text-align : center'
  }, {
    collumn: 'sigla',
    title: ('SIGLA'),
    style: 'text-align : center'
  }, {
    collumn: 'descricao',
    title: ('TIPO_CALCULO'),
    style: 'text-align : left'
  }, {
    collumn: 'unidadeMedida',
    collumn2: 'descricao',
    collumnSelet: 'unidadeMedida',
    title: ('UNIDADE_MEDIDA'),
    style: 'text-align : center'
  }];

  tipoDespesa = [{
    collumn: 'descricao',
    title: ('DESCRICAO'),
    style: 'text-align : left'
  }, {
    collumn: 'grupoDespesa',
    collumn2: 'descricao',
    collumnSelect: 'grupoDespesa.descricao',
    title: ('GRUPO'),
    style: 'text-align : left'
  }];

  tipoVeiculo = [{
    collumn: 'descricao',
    title: ('TIPO_VEICULO'),
    style: 'text-align : left'
  }];

  variedadeSemente = [{
    collumn: 'descricao',
    title: ('VARIEDADE_SEMENTE'),
    style: 'text-align : left'
  }, {
    collumn: 'ativo',
    title: ('ATIVO'),
    style: 'text-align : center'
  }];

  veiculo = [{
    collumn: 'placa',
    title: ('PLACA'),
    style: 'text-align : left'
  }, {
    collumn: 'renavam',
    title: 'Renavam',
    style: 'text-align : left'
  }, {
    collumn: 'dsModelo',
    collumnSelect: 'modeloVeiculo.descricao',
    title: ('MODELO_VEICULO'),
    style: 'text-align : left'
  }, {
    collumn: 'nmProprietario',
    collumnSelect: 'proprietario.nmClifor',
    title: ('PROPRIETARIO'),
    style: 'text-align : left'
  }, {
    collumn: 'ativo',
    title: ('ATIVO'),
    style: 'text-align : center'
  }];

  viaTransporte = [{
    collumn: 'descricao',
    title: ('VIA_TRANSPORTE'),
    style: 'text-align : left'
  }];


  getCollum(entityName) {
    switch (entityName.toLowerCase()) {
      case 'clifor':
        return this.clifor;
      case 'amostragrao':
        return this.amostraGrao;
      case 'areatalhao':
        return this.areaTalhao;
      case 'banco':
        return this.banco;
      case 'bandeira':
        return this.bandeira;
      case 'blocomanejo':
        return this.blocoManejo;
      case 'centrocusto':
        return this.centroCusto;
      case 'contrato':
        return this.contrato;
      case 'contabancaria':
        return this.contaBancaria;
      case 'contagerencial':
        return this.contaGerencial;
      case 'cultivar':
        return this.cultivar;
      case 'cultura':
        return this.cultura;
      case 'deposito':
        return this.deposito;
      case 'estado':
        return this.estado;
      case 'empresa':
        return this.empresa;
      case 'faselavoura':
        return this.faseLavoura;
      case 'formapagamento':
        return this.formaPagamento;
      case 'grupoamostra':
        return this.grupoAmostra;
      case 'grupodespesa':
        return this.grupoDespesa;
      case 'grupoitem':
        return this.grupoItem;
      case 'item':
        return this.item;
      case 'lancamento':
        return this.lancamento;
      case 'lavoura':
        return this.lavoura;
      case 'manejolavoura':
        return this.manejoLavoura;
      case 'marcaveiculo':
        return this.marcaVeiculo;
      case 'modeloveiculo':
        return this.modeloVeiculo;
      case 'moeda':
        return this.moeda;
      case 'movimento':
        return this.movimento;
      case 'municipio':
        return this.municipio;
      case 'pais':
        return this.pais;
      case 'propriedade':
        return this.propriedade;
      case 'recurso':
        return this.recurso;
      case 'subgrupoitem':
        return this.subGrupoItem;
      case 'tabeladesconto':
        return this.tabelaDesconto;
      case 'talhao':
        return this.talhao;
      case 'tpcalculo':
        return this.tpCalculo;
      case 'tipodespesa':
        return this.tipoDespesa;
      case 'tipoveiculo':
        return this.tipoVeiculo;
      case 'variedadesemente':
        return this.variedadeSemente;
      case 'veiculo':
        return this.veiculo;
      case 'viatransporte':
        return this.viaTransporte;
      default:
        return [{
          title: ('Descricao'),
          collumn: 'descricao',
        }];
    }
  }

constructor() { }

}

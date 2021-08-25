import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment as env } from '../../environments/environment';
import { AptAtividade } from '../models/aptAtividade';
import { Observable } from 'rxjs/internal/Observable';
import { AptAtividadeDetalheForm } from '../models/aptAtividadeDetalheForm';
import { Ocorrencia } from '../models/ocorrencia';

@Injectable({
  providedIn: 'root'
})
export class AtividadeService {

  private readonly APT_PATH: string = 'apt-atividade';
  private readonly PROP_PATH: string = 'propriedade';
  private readonly SAFRA_PATH: string = 'safra';
  private readonly TALHAO_PATH: string = 'talhao';
  private readonly ID_PATH: string = '/{id}';
  private readonly APT_DET_PATH: string = 'apt-atividade-det';
  private readonly ID_DET_PATH: string = 'detalhes/{idApontamento}';  
  private readonly HIB_PATH: string = 'hibrido';
  private readonly INS_PATH: string = 'insumo';
  private readonly MAQ_PATH: string = 'maquina';
  private readonly PES_PATH: string = 'pessoa';
  private readonly OCORRENCIA_PATH: string = 'ocorrencia';


  constructor(private http: HttpClient) { } 

  salvarAptAtivAgricola(apontamento: AptAtividade): Observable<any> {
    console.log("SERVICE" + JSON.stringify(apontamento));
    return this.http.post(env.baseUrl + this.APT_PATH, apontamento);
  }

  retornarTodasPropriedadesSemPaginacao(): Observable<any> {
    return this.http.get(env.baseUrl + this.PROP_PATH);
  }

  retornarTodasSafrasSemPaginacao(): Observable<any> {
    return this.http.get(env.baseUrl + this.SAFRA_PATH);
  }

  retornarTodosTalhoesSemPaginacao(): Observable<any> {
    return this.http.get(env.baseUrl + this.TALHAO_PATH);
  }

  retornarTodosTalhoesSemPaginacaoPorPropriedade(idPropriedade: string): Observable<any> {
    return this.http.get(env.baseUrl + this.TALHAO_PATH + '/' + this.PROP_PATH + this.ID_PATH.replace('{id}', idPropriedade));
  }

  salvarAptAtivAgricolaDetalhe(detalhe: AptAtividadeDetalheForm): Observable<any> {
    return this.http.post(env.baseUrl + this.APT_DET_PATH, detalhe);
  }

  recuperarTodosDetalhesPorApontamento(idApontamento: string): Observable<any> {
    return this.http.get(env.baseUrl + this.APT_DET_PATH + '/' + this.ID_DET_PATH.replace('{idApontamento}', idApontamento));
  }

  retornarTodosHibridosSemPaginacao(): Observable<any> {
    return this.http.get(env.baseUrl + this.HIB_PATH);
  }

  retornarTodasInsumosSemPaginacao(): Observable<any> {
    return this.http.get(env.baseUrl + this.INS_PATH);
  }

  retornarTodasMaquinasSemPaginacao(): Observable<any> {
    return this.http.get(env.baseUrl + this.MAQ_PATH);
  }

  retornarTodasPessoasSemPaginacao(): Observable<any> {
    return this.http.get(env.baseUrl + this.PES_PATH);
  }

  salvarNovaOcorrencia(ocorrencia: Ocorrencia): Observable<any> {
    return this.http.post(env.baseUrl + this.OCORRENCIA_PATH, ocorrencia);
  }

  retornarTodasAtividadesSemPaginacao(): Observable<any> {
    return this.http.get(env.baseUrl + this.APT_DET_PATH);
  }

  retornarTodasOcorrenciasSemPaginacao(): Observable<any> {
    return this.http.get(env.baseUrl + this.OCORRENCIA_PATH);
  }
}

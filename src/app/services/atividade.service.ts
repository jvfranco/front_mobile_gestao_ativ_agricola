import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment as env } from '../../environments/environment';
import { AptAtividade } from '../models/aptAtividade';
import { Observable } from 'rxjs/internal/Observable';
import { AptAtividadeDetalheForm } from '../models/aptAtividadeDetalheForm';

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
    return this.http.get(env.baseUrl + this.ID_DET_PATH.replace('{idApontamento}', idApontamento));
  }

}

import { JsonpClientBackend } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AptAtividade } from 'src/app/models/aptAtividade';
import { Propriedade } from 'src/app/models/propriedade';
import { Safra } from 'src/app/models/safra';
import { Talhao } from 'src/app/models/talhao';
import { AtividadeService } from 'src/app/services/atividade.service';

@Component({
  selector: 'app-apt-atividade',
  templateUrl: './apt-atividade.page.html',
  styleUrls: ['./apt-atividade.page.scss'],
})
export class AptAtividadePage implements OnInit {

  propriedades: Propriedade[];
  safras: Safra[];
  talhoes: Talhao[];
  apontamento: AptAtividade;

  constructor(
    private router: Router,
    private service: AtividadeService,
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.recuperaTodasPropriedades();
    this.recuperaTodasSafras();
  }

  form = this.fb.group({
    dataAtividade: ['', Validators.required],
    horaInicio: ['', Validators.required],
    horaTermino: ['', Validators.required],
    descricaoAtividade: ['', Validators.required],
    safra: ['', Validators.required],
    propriedade: ['', Validators.required],
    talhao: ['', Validators.required]
  });

  recuperaTodasPropriedades() {
    this.service.retornarTodasPropriedadesSemPaginacao().subscribe(
      data => {
        this.propriedades = data;
      },
      err => {
        console.log(JSON.stringify(err));
      }
    )
  }

  recuperaTodasSafras() {
    this.service.retornarTodasSafrasSemPaginacao().subscribe(
      data => {
        this.safras = data;
      },
      err => {
        console.log(JSON.stringify(err));
      }
    )
  }

  recuperaTodosTalhosPorPropriedade() {
    let idPropriedade = this.form.get('propriedade').value;
    this.service.retornarTodosTalhoesSemPaginacaoPorPropriedade(idPropriedade).subscribe(
      data => {
        this.talhoes = data;
      },
      err => {
        console.log(JSON.stringify(err));
      }
    )
  }

  salvarAptHeader() {
    this.apontamento = this.montaApontamento();
    console.log(JSON.stringify(this.apontamento));
    this.service.salvarAptAtivAgricola(this.apontamento).subscribe(
      data => {
        console.log('RESPOSTA SAVE: ' + JSON.stringify(data));
        this.resetaForm();
        this.router.navigateByUrl(`/home/detalhe/${data.id}`);
      },
      err => {
        console.log(JSON.stringify(err));
        this.router.navigateByUrl(`/home/detalhe/1`);
      });
  }

  montaApontamento(): AptAtividade {
    var apt: AptAtividade = this.form.value;
    apt.dataAtividade = this.montaData(this.form.get('dataAtividade').value);
    apt.horaInicio = this.montaHora(this.form.get('horaInicio').value);
    apt.horaTermino = this.montaHora(this.form.get('horaTermino').value);
    return apt;
  }

  montaData(data: string): string {
    let dt = new Date(data);
    let dia = dt.getDate().toString().length === 1 ? `0${dt.getDate().toString()}` : dt.getDate().toString();
    let mes = dt.getMonth().toString().length === 1 ? `0${dt.getMonth().toString()}` : dt.getMonth().toString();
    let dataStr = `${dia}/${mes}/${dt.getFullYear()}`;
    return dataStr;
  }

  montaHora(data: string): string {
    let dt = new Date(data);
    let hr = dt.getHours().toString().length === 1 ? `0${dt.getHours().toString()}` : dt.getHours().toString();
    let min = dt.getMinutes().toString().length === 1 ? `0${dt.getMinutes().toString()}` : dt.getMinutes().toString();
    let dataStr = `${hr}:${min}`;
    return dataStr;
  }

  resetaForm() {
    this.form.reset();
  }

}

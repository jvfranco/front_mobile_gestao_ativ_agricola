import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { Ocorrencia } from 'src/app/models/ocorrencia';

import { Propriedade } from 'src/app/models/propriedade';
import { Safra } from 'src/app/models/safra';
import { Talhao } from 'src/app/models/talhao';
import { AtividadeService } from 'src/app/services/atividade.service';

@Component({
  selector: 'app-apt-ocorrencia',
  templateUrl: './apt-ocorrencia.page.html',
  styleUrls: ['./apt-ocorrencia.page.scss'],
})
export class AptOcorrenciaPage implements OnInit {

  propriedades: Propriedade[];
  safras: Safra[];
  talhoes: Talhao[];
  latitude: number;
  longitude: number;

  constructor(
    private service: AtividadeService,
    private fb: FormBuilder,
    private geolocation: Geolocation,
    private router: Router
  ) { }

  ngOnInit() {
    this.recuperaTodasPropriedades();
    this.recuperaTodasSafras();
  }

  form = this.fb.group({
    dataOcorrencia: ['', Validators.required],
    propriedade: ['', Validators.required],
    safra: ['', Validators.required],
    talhao: ['', Validators.required],
    titulo: ['', [Validators.required, Validators.maxLength(100)]],
    descricao: ['', [Validators.required, Validators.maxLength(255)]]
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

  geolocalizacao() {
    this.geolocation.getCurrentPosition().then((resp) => {
      console.log(resp);
      this.latitude = resp.coords.latitude;
      this.longitude = resp.coords.longitude;
     }).catch((error) => {
       console.log('Error getting location', error);
     });
  }

  salvar() {
    if (this.form.invalid) {
      return;
    }

    const ocorrencia: Ocorrencia = this.form.value;
    ocorrencia.coordenadas = `{ \"latitude\":\"${this.latitude}\",\"longitude\":\"${this.longitude}\" }`;
    ocorrencia.dataOcorrencia = this.montaData(this.form.get('dataOcorrencia').value);
    console.log(JSON.stringify(ocorrencia));
    let msg: string = '';
    this.service.salvarNovaOcorrencia(ocorrencia).subscribe(
      data => {
        console.log(JSON.stringify(data))
        msg = 'Ocorrência cadastrada com sucesso.';
        this.form.reset();
        this.router.navigateByUrl('/home');
      },
      err => {
        console.log(JSON.stringify(err));
        msg = 'Ocorreram erros no cadastro da Ocorrência.';
      }
    )
  }

  montaData(data: string): string {
    let dt = new Date(data);
    let dia = dt.getDate().toString().length === 1 ? `0${dt.getDate().toString()}` : dt.getDate().toString();
    let mes = dt.getMonth().toString().length === 1 ? `0${dt.getMonth().toString()}` : dt.getMonth().toString();
    let dataStr = `${dia}/${mes}/${dt.getFullYear()}`;

    let hr = dt.getHours().toString().length === 1 ? `0${dt.getHours()}` : dt.getHours().toString();
    let mn = dt.getMinutes().toString().length === 1 ? `0${dt.getMinutes()}` : dt.getMinutes().toString();
    let horaStr = `${hr}:${mn}`

    let dataPadronizada = `${dataStr} ${horaStr}`;
    return dataPadronizada;
  }

  resetaForm() {
    this.form.reset();
  }

}

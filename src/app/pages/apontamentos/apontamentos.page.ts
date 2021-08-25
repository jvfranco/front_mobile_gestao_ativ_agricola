import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { AptAtividadeDTO } from 'src/app/models/aptAtividadeDTO';
import { Ocorrencia } from 'src/app/models/ocorrencia';
import { AtividadeService } from 'src/app/services/atividade.service';

@Component({
  selector: 'app-apontamentos',
  templateUrl: './apontamentos.page.html',
  styleUrls: ['./apontamentos.page.scss'],
})
export class ApontamentosPage implements OnInit {

  ocorrencias: Ocorrencia[];
  atividades: AptAtividadeDTO[];

  constructor(
    private service: AtividadeService,
    public toastController: ToastController
  ) { }

  ionViewDidEnter() {
    this.retornarTodosApontamentosSemPaginacao();
    this.retornarTodasOcorrenciasSemPaginacao();
  }

  ngOnInit() {
  }

  retornarTodosApontamentosSemPaginacao() {
    this.service.retornarTodasAtividadesSemPaginacao().subscribe(
      data => {
        this.atividades = data;
      },
      err => {
        console.log(err);
        this.presentToast();
      }
    );
  }

  retornarTodasOcorrenciasSemPaginacao() {
    this.service.retornarTodasOcorrenciasSemPaginacao().subscribe(
      data => {
        console.log(JSON.stringify(data));
        this.ocorrencias = data;
      },
      err => {
        console.log(err);
        this.presentToast();
      }
    );
  }

  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Erro ao buscar dados.',
      duration: 2000
    });
    toast.present();
  }

}

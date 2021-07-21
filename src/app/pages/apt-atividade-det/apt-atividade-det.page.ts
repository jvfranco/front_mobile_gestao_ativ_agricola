import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { AptAtividadeDetalhe } from 'src/app/models/aptAtividadeDetalhe';
import { AtividadeService } from 'src/app/services/atividade.service';
import { AptModalPage } from '../apt-modal/apt-modal.page';

@Component({
  selector: 'app-apt-atividade-det',
  templateUrl: './apt-atividade-det.page.html',
  styleUrls: ['./apt-atividade-det.page.scss'],
})
export class AptAtividadeDetPage implements OnInit {

  apontamentoID: string;
  detalhes: AptAtividadeDetalhe[];

  constructor(
    private route: ActivatedRoute,
    private service: AtividadeService,
    private modalCtrl: ModalController
  ) { }

  ngOnInit() {
    this.apontamentoID = this.route.snapshot.paramMap.get('apontamentoID');
    this.retornarDetalhes(this.apontamentoID);
  }

  retornarDetalhes(apontamentoID: string) {
    this.service.recuperarTodosDetalhesPorApontamento(apontamentoID).subscribe(
      data => {
        console.log(JSON.stringify(data));
        this.detalhes = data;
      },
      err => {
        console.log(JSON.stringify(err));
      }
    )
  }

  async showModal() {
    const modal = await this.modalCtrl.create({
      component: AptModalPage,
      cssClass: 'modal-class',
      componentProps: {
        'apontamentoID': this.apontamentoID
      }
    });

    modal.present();

    const { data } = await modal.onWillDismiss();
    if (data.dismissed) {
      this.retornarDetalhes(this.apontamentoID);
    }
  }
}

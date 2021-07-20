import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AptAtividadeDetalhe } from 'src/app/models/aptAtividadeDetalhe';
import { AtividadeService } from 'src/app/services/atividade.service';

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
    private service: AtividadeService
  ) { }

  ngOnInit() {
    this.apontamentoID = this.route.snapshot.paramMap.get('apontamentoID');
    this.retornarDetalhes(this.apontamentoID);
  }

  retornarDetalhes(apontamentoID: string) {
    this.service.recuperarTodosDetalhesPorApontamento(apontamentoID).subscribe(
      data => {
        this.detalhes = data;
      },
      err => {
        console.log(JSON.stringify(err));
      }
    )
  }

}

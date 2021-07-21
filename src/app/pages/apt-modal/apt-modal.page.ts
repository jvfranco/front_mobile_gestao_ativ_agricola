import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ModalController, NavParams } from '@ionic/angular';
import { AptAtividadeDetalhe } from 'src/app/models/aptAtividadeDetalhe';
import { AptAtividadeDetalheForm } from 'src/app/models/aptAtividadeDetalheForm';

import { Hibrido } from 'src/app/models/hibrido';
import { Insumo } from 'src/app/models/insumo';
import { Maquina } from 'src/app/models/maquina';
import { Pessoa } from 'src/app/models/pessoa';
import { AtividadeService } from 'src/app/services/atividade.service';

@Component({
  selector: 'app-apt-modal',
  templateUrl: './apt-modal.page.html',
  styleUrls: ['./apt-modal.page.scss'],
})
export class AptModalPage implements OnInit {

  @Input() apontamentoID;

  maquinas: Maquina[];
  insumos: Insumo[];
  hibridos: Hibrido[];
  funcionarios: Pessoa[];

  constructor(
    private modalCtrl: ModalController,
    private service: AtividadeService,
    private fb: FormBuilder
  ) {}

  ngOnInit() {
    this.retornarTodasMaquinasSemPaginacao();
    this.retornarTodosHibridosSemPaginacao();
    this.retornarTodasInsumosSemPaginacao();
    this.retornarTodasPessoasSemPaginacao();
  }

  form = this.fb.group({
    maquina: ['', Validators.required],
    insumo: [''],
    quantidadeInsumo: [0.0],
    hibrido: [''],
    quantidadeHibrido: [0.0],
    funcionario: ['', Validators.required]
  });

  salvar() {
    if (this.form.invalid) {
      return;
    }

    const detalhe: AptAtividadeDetalheForm = this.form.value;
    detalhe.idApontamentoCabecalho = this.apontamentoID;
    console.log(JSON.stringify(detalhe));
    let msg: string = '';
    this.service.salvarAptAtivAgricolaDetalhe(detalhe).subscribe(
      data => {
        console.log(JSON.stringify(data))
        msg = 'Detalhe cadastrade com sucesso.';
        this.form.reset();
        this.closeModal();
      },
      err => {
        console.log(JSON.stringify(err));
        msg = 'Ocorreram erros no cadastro do híbrido.';
        this.closeModal();
      }
    )
  }

  retornarTodosHibridosSemPaginacao() {
    this.service.retornarTodosHibridosSemPaginacao().subscribe(
      data => {
        this.hibridos = data;
      },
      err => {
        console.log(err);
      }
    )
  };

  retornarTodasInsumosSemPaginacao() {
    this.service.retornarTodasInsumosSemPaginacao().subscribe(
      data => {
        this.insumos = data;
      },
      err => {
        console.log(err);
      }
    )
  };

  retornarTodasMaquinasSemPaginacao() {
    this.service.retornarTodasMaquinasSemPaginacao().subscribe(
      data => {
        this.maquinas = data;
      },
      err => {
        console.log(err);
      }
    )
  };

  retornarTodasPessoasSemPaginacao() {
    this.service.retornarTodasPessoasSemPaginacao().subscribe(
      data => {
        this.funcionarios = data;
      },
      err => {
        console.log(err);
      }
    )
  };

  closeModal() {
    this.modalCtrl.dismiss({
      'dismissed': true
    });
  }

}

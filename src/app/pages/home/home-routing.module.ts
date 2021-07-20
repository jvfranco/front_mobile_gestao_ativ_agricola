import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
    children: [
      {
        path: 'ocorrencia',
        loadChildren: () => import('../apt-ocorrencia/apt-ocorrencia.module').then(m => m.AptOcorrenciaPageModule)
      },
      {
        path: 'atividade',
        loadChildren: () => import('../apt-atividade/apt-atividade.module').then(m => m.AptAtividadePageModule)
      },
      {
        path: 'detalhe/:apontamentoID',
        loadChildren: () => import('../apt-atividade-det/apt-atividade-det.module').then(m => m.AptAtividadeDetPageModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomePageRoutingModule { }

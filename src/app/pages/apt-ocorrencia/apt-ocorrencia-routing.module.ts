import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AptOcorrenciaPage } from './apt-ocorrencia.page';

const routes: Routes = [
  {
    path: '',
    component: AptOcorrenciaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AptOcorrenciaPageRoutingModule {}

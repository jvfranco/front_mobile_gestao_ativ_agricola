import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AptAtividadePage } from './apt-atividade.page';

const routes: Routes = [
  {
    path: '',
    component: AptAtividadePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AptAtividadePageRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AptAtividadeDetPage } from './apt-atividade-det.page';

const routes: Routes = [
  {
    path: '',
    component: AptAtividadeDetPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AptAtividadeDetPageRoutingModule {}

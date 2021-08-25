import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ApontamentosPage } from './apontamentos.page';

const routes: Routes = [
  {
    path: '',
    component: ApontamentosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ApontamentosPageRoutingModule {}

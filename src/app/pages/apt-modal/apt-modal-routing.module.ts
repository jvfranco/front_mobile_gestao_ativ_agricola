import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AptModalPage } from './apt-modal.page';

const routes: Routes = [
  {
    path: '',
    component: AptModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AptModalPageRoutingModule {}

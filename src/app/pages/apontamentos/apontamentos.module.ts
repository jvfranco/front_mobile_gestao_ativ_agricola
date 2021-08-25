import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ApontamentosPageRoutingModule } from './apontamentos-routing.module';

import { ApontamentosPage } from './apontamentos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ApontamentosPageRoutingModule
  ],
  declarations: [ApontamentosPage]
})
export class ApontamentosPageModule {}

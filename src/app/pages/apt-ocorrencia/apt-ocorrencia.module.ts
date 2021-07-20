import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AptOcorrenciaPageRoutingModule } from './apt-ocorrencia-routing.module';

import { AptOcorrenciaPage } from './apt-ocorrencia.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AptOcorrenciaPageRoutingModule
  ],
  declarations: [AptOcorrenciaPage]
})
export class AptOcorrenciaPageModule {}

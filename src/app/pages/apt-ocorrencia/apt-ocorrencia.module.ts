import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Geolocation } from '@ionic-native/geolocation/ngx';

import { AptOcorrenciaPageRoutingModule } from './apt-ocorrencia-routing.module';

import { AptOcorrenciaPage } from './apt-ocorrencia.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    AptOcorrenciaPageRoutingModule
  ],
  declarations: [AptOcorrenciaPage],
  providers: [
    Geolocation
  ]
})
export class AptOcorrenciaPageModule {}

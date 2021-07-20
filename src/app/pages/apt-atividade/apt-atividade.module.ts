import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AptAtividadePageRoutingModule } from './apt-atividade-routing.module';

import { AptAtividadePage } from './apt-atividade.page';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    RouterModule,
    AptAtividadePageRoutingModule
  ],
  declarations: [AptAtividadePage]
})
export class AptAtividadePageModule {}

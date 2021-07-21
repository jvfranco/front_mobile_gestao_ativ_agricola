import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AptAtividadeDetPageRoutingModule } from './apt-atividade-det-routing.module';

import { AptAtividadeDetPage } from './apt-atividade-det.page';
import { AptModalPage } from '../apt-modal/apt-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    AptAtividadeDetPageRoutingModule
  ],
  declarations: [AptAtividadeDetPage, AptModalPage],
  entryComponents: [AptModalPage]
})
export class AptAtividadeDetPageModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AptAtividadeDetPageRoutingModule } from './apt-atividade-det-routing.module';

import { AptAtividadeDetPage } from './apt-atividade-det.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AptAtividadeDetPageRoutingModule
  ],
  declarations: [AptAtividadeDetPage]
})
export class AptAtividadeDetPageModule {}

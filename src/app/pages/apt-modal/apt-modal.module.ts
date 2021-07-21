import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AptModalPageRoutingModule } from './apt-modal-routing.module';

import { AptModalPage } from './apt-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    AptModalPageRoutingModule
  ],
  declarations: [AptModalPage],
  exports: [
    AptModalPage
  ]
})
export class AptModalPageModule {}

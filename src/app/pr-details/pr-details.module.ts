import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PrDetailsPageRoutingModule } from './pr-details-routing.module';

import { PrDetailsPage } from './pr-details.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PrDetailsPageRoutingModule
  ],
  declarations: [PrDetailsPage]
})
export class PrDetailsPageModule {}

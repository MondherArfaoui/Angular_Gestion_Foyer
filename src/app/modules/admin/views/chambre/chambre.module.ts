import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChambreRoutingModule } from './chambre-routing.module';
import { AddChambreBlocComponent } from './add-chambre-bloc/add-chambre-bloc.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AddChambreBlocComponent
  ],
  imports: [
    CommonModule,
    ChambreRoutingModule,
    FormsModule
  ]
})
export class ChambreModule { }

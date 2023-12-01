import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { EtudiantRoutingModule } from './etudiant-routing.module';
import { EtudiantLayoutComponent } from './layout/etudiant-layout.component';
import { EtudiantProfileComponent } from './views/etudiant-profile/etudiant-profile.component';
import { ListReservationComponent } from './views/list-reservation/list-reservation.component';
import { ListFoyerComponent } from './views/list-foyer/list-foyer.component';
import { ListChambreComponent } from './views/list-chambre/list-chambre.component';


@NgModule({
  declarations: [
    EtudiantLayoutComponent,
    EtudiantProfileComponent,
    ListReservationComponent,
    ListFoyerComponent,
    ListChambreComponent
  ],
  imports: [
    CommonModule,
    EtudiantRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class EtudiantModule { }

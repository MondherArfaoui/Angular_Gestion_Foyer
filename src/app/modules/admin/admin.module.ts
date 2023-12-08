import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminLayoutComponent } from './layout/admin-layout.component';
import { HttpClientModule } from '@angular/common/http';
import { ListUniversiteComponent } from './views/list-universite/list-universite.component';
import { ListFoyerComponent } from './views/list-foyer/list-foyer.component';
import { ListBlocFoyerComponent } from './views/list-bloc-foyer/list-bloc-foyer.component';
import { ListChambreBlocComponent } from './views/list-chambre-bloc/list-chambre-bloc.component';
import { ListEtudiantComponent } from './views/list-etudiant/list-etudiant.component';
import { ListReservationComponent } from './views/list-reservation/list-reservation.component';
import { RechercheEtudiantPipe } from 'src/app/core/pipes/Etudiant/recherche-etudiant.pipe';
import { RechercheUniversitePipe } from 'src/app/core/pipes/Universite/recherche-universite.pipe';


@NgModule({
  declarations: [
    AdminLayoutComponent,
    ListUniversiteComponent,
    ListFoyerComponent,
    ListBlocFoyerComponent,
    ListChambreBlocComponent,
    ListEtudiantComponent,
    ListReservationComponent,
    RechercheEtudiantPipe,
    RechercheUniversitePipe
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ]
})
export class AdminModule { }

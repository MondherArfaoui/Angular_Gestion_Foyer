import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminLayoutComponent } from './layout/admin-layout.component';
import { AdminProfileComponent } from './views/admin-profile/admin-profile.component';
import { HttpClientModule } from '@angular/common/http';
import { ListUniversiteComponent } from './views/list-universite/list-universite.component';
import { ListFoyerComponent } from './views/list-foyer/list-foyer.component';
import { ListBlocFoyerComponent } from './views/list-bloc-foyer/list-bloc-foyer.component';
import { ListChambreBlocComponent } from './views/list-chambre-bloc/list-chambre-bloc.component';
import { ListEtudiantComponent } from './views/list-etudiant/list-etudiant.component';
import { ListReservationComponent } from './views/list-reservation/list-reservation.component';
import { AjouterBlocComponent } from './views/ajouter-bloc/ajouter-bloc.component';
import { UpdateBlocComponent } from './views/update-bloc/update-bloc.component';
import { DetailsBlocComponent } from './views/details-bloc/details-bloc.component';
import { AffecterBlocFoyerComponent } from './views/affecter-bloc-foyer/affecter-bloc-foyer.component';
import { AffecterChambresBlocComponent } from './views/affecter-chambres-bloc/affecter-chambres-bloc.component';

@NgModule({
  declarations: [
    AdminLayoutComponent,
    AdminProfileComponent,
    ListUniversiteComponent,
    ListFoyerComponent,
    ListBlocFoyerComponent,
    ListChambreBlocComponent,
    ListEtudiantComponent,
    ListReservationComponent,
    AjouterBlocComponent,
    UpdateBlocComponent,
    DetailsBlocComponent,
    AffecterBlocFoyerComponent,
    AffecterChambresBlocComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
})
export class AdminModule {}

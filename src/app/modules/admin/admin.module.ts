import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminLayoutComponent } from './layout/admin-layout.component';
import { AdminProfileComponent } from './views/admin-profile/admin-profile.component';
import { HttpClientModule } from '@angular/common/http';
import { ListFoyerComponent } from './views/list-foyer/list-foyer.component';
import { ListBlocFoyerComponent } from './views/list-bloc-foyer/list-bloc-foyer.component';
import { ListChambreBlocComponent } from './views/list-chambre-bloc/list-chambre-bloc.component';
import { ListEtudiantComponent } from './views/list-etudiant/list-etudiant.component';
import { ListReservationComponent } from './views/list-reservation/list-reservation.component';
import { UniversitesComponent } from './views/universites/universites.component';
import { CreateUniversiteComponent } from './views/universites/create-universite/create-universite.component';
import { DetailsUniversiteComponent } from './views/universites/details-universite/details-universite.component';
import { ListUniversiteComponent } from './views/universites/list-universite/list-universite.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { SearchComponent } from './views/universites/search/search.component';
import { ToastrModule } from 'ngx-toastr';
import { AffecterfoyerComponent } from './views/universites/affecterfoyer/affecterfoyer.component';

@NgModule({
  declarations: [
    AdminLayoutComponent,
    AdminProfileComponent,
    ListFoyerComponent,
    ListBlocFoyerComponent,
    ListChambreBlocComponent,
    ListEtudiantComponent,
    ListReservationComponent,

   
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    ToastrModule.forRoot(),
    NgxPaginationModule,
    HttpClientModule
  ]
})
export class AdminModule { }

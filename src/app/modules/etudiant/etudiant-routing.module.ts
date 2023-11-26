import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EtudiantProfileComponent } from './views/etudiant-profile/etudiant-profile.component';
import { EtudiantLayoutComponent } from './layout/etudiant-layout.component';
import { ListFoyerComponent } from './views/list-foyer/list-foyer.component';
import { ListReservationComponent } from './views/list-reservation/list-reservation.component';
import { ListeBlocComponent } from './views/liste-bloc/liste-bloc.component';
import { DetailsBlocComponent } from './views/details-bloc/details-bloc.component';

const routes: Routes = [
  {
    path: '',
    component: EtudiantLayoutComponent,
    children: [
      { path: 'etudiant-profile', component: EtudiantProfileComponent },
      { path: 'list-foyer', component: ListFoyerComponent },
      { path: 'list-reservation', component: ListReservationComponent },
      { path: 'liste_bloc', component: ListeBlocComponent },
      { path: 'details_bloc/:idbloc', component: DetailsBlocComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EtudiantRoutingModule {}

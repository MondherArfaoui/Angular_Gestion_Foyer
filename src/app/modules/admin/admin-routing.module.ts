import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminProfileComponent } from './views/admin-profile/admin-profile.component';
import { AdminLayoutComponent } from './layout/admin-layout.component';
import { ListFoyerComponent } from './views/list-foyer/list-foyer.component';
import { ListReservationComponent } from './views/list-reservation/list-reservation.component';
import { ListBlocFoyerComponent } from './views/list-bloc-foyer/list-bloc-foyer.component';
import { ListChambreBlocComponent } from './views/list-chambre-bloc/list-chambre-bloc.component';
import { ListEtudiantComponent } from './views/list-etudiant/list-etudiant.component';
import { AjouterBlocComponent } from './views/ajouter-bloc/ajouter-bloc.component';
import { UpdateBlocComponent } from './views/update-bloc/update-bloc.component';
import { DetailsBlocComponent } from './views/details-bloc/details-bloc.component';
import { AffecterBlocFoyerComponent } from './views/affecter-bloc-foyer/affecter-bloc-foyer.component';
import { AffecterChambresBlocComponent } from './views/affecter-chambres-bloc/affecter-chambres-bloc.component';

const routes: Routes = [
  {
    path: '',
    component: AdminLayoutComponent,
    children: [
      { path: 'admin-profile', component: AdminProfileComponent },
      { path: 'list-foyer', component: ListFoyerComponent },
      { path: 'list-university', component: ListReservationComponent },
      { path: 'list-bloc-foyer', component: ListBlocFoyerComponent },
      { path: 'list-chambre-bloc', component: ListChambreBlocComponent },
      { path: 'list-reservation', component: ListReservationComponent },
      { path: 'list-etudiant', component: ListEtudiantComponent },
      { path: 'ajouter_bloc', component: AjouterBlocComponent },
      { path: 'modifier_bloc/:idBloc', component: UpdateBlocComponent },
      { path: 'details_bloc/:idbloc', component: DetailsBlocComponent },
      {
        path: 'affecter_chambres_bloc',
        component: AffecterChambresBlocComponent,
      },
      {
        path: 'affecter_foyer_bloc/:idbloc',
        component: AffecterBlocFoyerComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}

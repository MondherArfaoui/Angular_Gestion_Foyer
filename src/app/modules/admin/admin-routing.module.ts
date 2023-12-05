import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminProfileComponent } from './views/admin-profile/admin-profile.component';
import { AdminLayoutComponent } from './layout/admin-layout.component';
import { ListFoyerComponent } from './views/list-foyer/list-foyer.component';
import { ListReservationComponent } from './views/list-reservation/list-reservation.component';
import { ListBlocFoyerComponent } from './views/list-bloc-foyer/list-bloc-foyer.component';
import { ListChambreBlocComponent } from './views/chambre/list-chambre-bloc/list-chambre-bloc.component';
import { ListEtudiantComponent } from './views/list-etudiant/list-etudiant.component';

const routes: Routes = [
  { path: '', component: AdminLayoutComponent, children:[
    { path: 'admin-profile', component: AdminProfileComponent },
    { path: 'list-foyer', component: ListFoyerComponent },
    { path: 'list-university', component: ListReservationComponent },
    { path: 'list-bloc-foyer', component: ListBlocFoyerComponent },
    // {path:  'list-chambre',loadChildren:()=>import('./views/chambre/chambre.module').then(m=>m.ChambreModule)},
    { path: 'list-reservation', component: ListReservationComponent },
    { path: 'list-etudiant', component: ListEtudiantComponent},
    { path: 'chambre', loadChildren: () => import('./views/chambre/chambre.module').then(m => m.ChambreModule) }

  ] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }

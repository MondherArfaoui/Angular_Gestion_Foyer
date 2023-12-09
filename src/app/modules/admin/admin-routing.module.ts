import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminProfileComponent } from './views/admin-profile/admin-profile.component';
import { AdminLayoutComponent } from './layout/admin-layout.component';
import { ListFoyerComponent } from './views/list-foyer/list-foyer.component';
import { ListReservationComponent } from './views/list-reservation/list-reservation.component';
import { ListBlocFoyerComponent } from './views/list-bloc-foyer/list-bloc-foyer.component';
import { ListChambreBlocComponent } from './views/list-chambre-bloc/list-chambre-bloc.component';
import { ListEtudiantComponent } from './views/list-etudiant/list-etudiant.component';
import { UniversitesComponent } from './views/universites/universites.component';
import { DetailsUniversiteComponent } from './views/universites/details-universite/details-universite.component';
import { CreateUniversiteComponent } from './views/universites/create-universite/create-universite.component';
import { ListUniversiteComponent } from './views//universites/list-universite/list-universite.component';
import { AffecterfoyerComponent } from './views/universites/affecterfoyer/affecterfoyer.component';


const routes: Routes = [
  { path: 'universite', loadChildren:()=>import('./views/universites/universite/universite.module').then(x => x.UniversiteModule) },
  { path: '', component: AdminLayoutComponent, children:[
    { path: 'admin-profile', component: AdminProfileComponent },
    { path: 'list-foyer', component: ListFoyerComponent },
    { path: 'list-university', component: ListReservationComponent },
    { path: 'list-bloc-foyer', component: ListBlocFoyerComponent },
    { path: 'list-chambre-bloc', component: ListChambreBlocComponent },
    { path: 'list-reservation', component: ListReservationComponent },
   
    
  ] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }

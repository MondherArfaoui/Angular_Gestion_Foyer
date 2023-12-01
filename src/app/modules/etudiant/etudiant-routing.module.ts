import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EtudiantProfileComponent } from './views/etudiant-profile/etudiant-profile.component';
import { EtudiantLayoutComponent } from './layout/etudiant-layout.component';
import { ListReservationComponent } from './views/list-reservation/list-reservation.component';
import { InfoFoyerUniversiteComponent } from './views/info-foyer-universite/info-foyer-universite.component';

const routes: Routes = [
  { path: '', component: EtudiantLayoutComponent, children:[
    { path: 'etudiant-profile', component: EtudiantProfileComponent },
    { path: 'infoFoyerUniversite', component: InfoFoyerUniversiteComponent },
    { path: 'list-reservation', component: ListReservationComponent }
  ] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EtudiantRoutingModule { }

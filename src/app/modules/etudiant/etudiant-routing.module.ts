import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EtudiantProfileComponent } from './views/etudiant-profile/etudiant-profile.component';
import { EtudiantLayoutComponent } from './layout/etudiant-layout.component';
import { ListFoyerComponent } from './views/list-foyer/list-foyer.component';
import { ListReservationComponent } from './views/list-reservation/list-reservation.component';

const routes: Routes = [
  { path: '', component: EtudiantLayoutComponent, children:[
    { path: 'etudiant-profile', component: EtudiantProfileComponent },
    { path: 'list-foyer', component: ListFoyerComponent },
    { path: 'list-reservation', component: ListReservationComponent }
  ] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EtudiantRoutingModule { }

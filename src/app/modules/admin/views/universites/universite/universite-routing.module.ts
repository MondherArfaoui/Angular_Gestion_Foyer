import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UniversitesComponent } from '../universites.component';
import { ListUniversiteComponent } from '../list-universite/list-universite.component';
import { DetailsUniversiteComponent } from '../details-universite/details-universite.component';
import { CreateUniversiteComponent } from '../create-universite/create-universite.component';
import { ListEtudiantComponent } from '../../list-etudiant/list-etudiant.component';
import { AffecterfoyerComponent } from '../affecterfoyer/affecterfoyer.component';

const routes: Routes = [{ path: 'universites', component: UniversitesComponent},
{path:"universite", component:ListUniversiteComponent},
{path:"list", component:DetailsUniversiteComponent},
{path:"add", component:CreateUniversiteComponent},
{ path: "putUni/:id", component:CreateUniversiteComponent},
{ path: 'AffecterF/:id', component: AffecterfoyerComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UniversiteRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListChambreBlocComponent } from './list-chambre-bloc/list-chambre-bloc.component';
import { AddChambreBlocComponent } from './add-chambre-bloc/add-chambre-bloc.component';

const routes: Routes = [
  { path: '', redirectTo: 'list-chambre-bloc', pathMatch: 'full' },
  {path:"list-chambre-bloc", component:ListChambreBlocComponent},
  {path:"add", component:AddChambreBlocComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChambreRoutingModule { }

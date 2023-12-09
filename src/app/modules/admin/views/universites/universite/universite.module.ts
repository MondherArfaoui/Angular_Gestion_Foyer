import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UniversiteRoutingModule } from './universite-routing.module';
import { CreateUniversiteComponent } from '../create-universite/create-universite.component';
import { DetailsUniversiteComponent } from '../details-universite/details-universite.component';
import { ListUniversiteComponent } from '../list-universite/list-universite.component';
import { UniversitesComponent } from '../universites.component';
import { AffecterfoyerComponent } from '../affecterfoyer/affecterfoyer.component';
import { SearchComponent } from '../search/search.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { NgxPaginationModule } from 'ngx-pagination';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [
    UniversitesComponent,
    CreateUniversiteComponent,
    DetailsUniversiteComponent,
    ListUniversiteComponent,
    SearchComponent,
    AffecterfoyerComponent
  ],
  imports: [
    CommonModule,
    UniversiteRoutingModule,
     FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    ReactiveFormsModule,
    ToastrModule.forRoot(),
    NgxPaginationModule,
    MatButtonModule,
    MatIconModule,
    HttpClientModule  
  ],
  bootstrap: [UniversitesComponent],
})
export class UniversiteModule { }

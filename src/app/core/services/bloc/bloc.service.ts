import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Bloc } from '../../models/bloc/bloc';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BlocService {

  constructor(private http: HttpClient) { }

  addBloc(bloc: Bloc) {
    return this.http.post(`${environment.baseUrl}/bloc/add`, bloc);
  }

  updateBloc(bloc: Bloc) {
    return this.http.put(`${environment.baseUrl}/bloc/update`, bloc);
  }

  getAllBlocs() {
    return this.http.get<Bloc[]>(`${environment.baseUrl}/bloc/all`);
  }

  getAllBlocsByIdFoyer(idFoyer: number) {
    return this.http.get<Bloc[]>(`${environment.baseUrl}/bloc/getAllBlocsByIdFoyer/${idFoyer}`);
  }

  getBlocById(idBloc: number) {
    return this.http.get<Bloc>(`${environment.baseUrl}/bloc/${idBloc}`);
  }

  deleteBloc(idBloc: number) {
    return this.http.delete(`${environment.baseUrl}/bloc/delete/${idBloc}`);
  }

  affecterChambresABloc(idChambre: number[], idBloc: number) {
    return this.http.put(`${environment.baseUrl}/bloc/affecterChambres/${idBloc}`, idChambre);
  }

  affecterBlocAFoyer(idBloc: number, idFoyer: number) {
    return this.http.put(`${environment.baseUrl}/bloc/affecterFoyer/${idBloc}/${idFoyer}`, null);
  }
}

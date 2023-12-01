import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Chambre } from '../../models/chambre/chambre';
import { TypeChambre } from '../../models/TypeChambre/type-chambre.enum';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ChambreService {

  constructor(private http: HttpClient) { }

  addChambre(chambre: Chambre) {
    return this.http.post(`${environment.baseUrl}/chambre/add`, chambre);
  }

  updateChambre(chambre: Chambre) {
    return this.http.put(`${environment.baseUrl}/chambre/update`, chambre);
  }

  getAllChambres() {
    return this.http.get<Chambre[]>(`${environment.baseUrl}/chambre/all`);
  }

  getChambreById(idChambre: number) {
    return this.http.get<Chambre>(`${environment.baseUrl}/chambre/${idChambre}`);
  }

  getChambresParBlocEtType(idBloc: number, typeC: TypeChambre) {
    return this.http.get<Chambre[]>(`${environment.baseUrl}/chambre/getChambresParBlocEtType/${idBloc}/${typeC}`);
  }

  getNombreChambresParBloc(idBloc: number) {
    return this.http.get<number>(`${environment.baseUrl}/chambre/getNombreChambresParBloc/${idBloc}`);
  }
}

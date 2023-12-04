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

  updateChambre(chambre: any) {
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

  deleteChambre(idChambre:number){
    return this.http.delete(`${environment.baseUrl}/chambre/delete/${idChambre}`);
  }
}

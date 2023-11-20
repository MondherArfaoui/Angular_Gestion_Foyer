import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Foyer } from '../../models/foyer/foyer';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FoyerService {

  constructor(private http: HttpClient) { }

  addFoyer(foyer: Foyer) {
    return this.http.post(`${environment.baseUrl}/foyer/add`, foyer);
  }

  ajouterFoyerEtAffecterAUniversite(foyer: Foyer, idUniversite: number) {
    return this.http.post(`${environment.baseUrl}/foyer/add/${idUniversite}`, foyer);
  }

  updateFoyer(foyer: Foyer) {
    return this.http.put(`${environment.baseUrl}/foyer/update`, foyer);
  }

  getAllFoyers() {
    return this.http.get<Foyer[]>(`${environment.baseUrl}/foyer/all`);
  }

  getFoyerById(idFoyer: number) {
    return this.http.get<Foyer>(`${environment.baseUrl}/foyer/${idFoyer}`);
  }

  deleteFoyer(idFoyer: number) {
    return this.http.delete(`${environment.baseUrl}/foyer/delete/${idFoyer}`);
  }
}

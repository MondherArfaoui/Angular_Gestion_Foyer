import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Universite } from '../../models/universite/universite';

@Injectable({
  providedIn: 'root'
})
export class UniversiteService {

  constructor(private http: HttpClient) { }

  addUniversite(universite: Universite) {
    return this.http.post(`${environment.baseUrl}/universite/add`, universite);
  }

  updateUniversite(universite: Universite) {
    return this.http.put(`${environment.baseUrl}/universite/update`, universite);
  }

  getAllUniversites() {
    return this.http.get<Universite[]>(`${environment.baseUrl}/universite/all`);
  }

  getUniversiteById(idUniversite: number) {
    return this.http.get<Universite>(`${environment.baseUrl}/universite/${idUniversite}`);
  }

  getUniversiteByIdEtudiant(idEtudiant: number) {
    return this.http.get<Universite>(`${environment.baseUrl}/universite/getUniversiteByIdEtudiant/${idEtudiant}`);
  }

  affecterFoyerAUniversite(idFoyer: number, nomUniversite: String) {
    return this.http.put(`${environment.baseUrl}/universite/affecterFoyer/${idFoyer}/${nomUniversite}`, null);
  }

  desaffecterFoyerAUniversite(idUniversite: number) {
    return this.http.put(`${environment.baseUrl}/universite/desaffecterFoyer/${idUniversite}`, null);
  }

  deleteUniversite(idUniversite: number) {
    return this.http.delete(`${environment.baseUrl}/universite/delete/${idUniversite}`);
  }
}

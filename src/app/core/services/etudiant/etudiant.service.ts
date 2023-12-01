import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Etudiant } from '../../models/etudiant/etudiant';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EtudiantService {

  constructor(private http: HttpClient) { }

  private getHeaders(): HttpHeaders {
    const token = localStorage.getItem('token');
    let headers = new HttpHeaders();
    if (token) {
      headers = headers.set('Authorization', `Bearer ${token}`);
    }
    return headers;
  }

  updateEtudiant(etudiant: Etudiant) {
    return this.http.put(`${environment.baseUrl}/etudiant/update`, etudiant);
  }

  getAllEtudiants() {
    return this.http.get<Etudiant[]>(`${environment.baseUrl}/etudiant/all`);
  }

  getOneEtudiant(idEtudiant: number) {
    return this.http.get<Etudiant>(`${environment.baseUrl}/etudiant/${idEtudiant}`);
  }

  deleteEtudiant(idEtudiant: number) {
    return this.http.delete(`${environment.baseUrl}/etudiant/delete/${idEtudiant}`);
  }

  updatePassword(idEtudiant:number , password:string){
    return this.http.put(`${environment.baseUrl}/etudiant/updatePassword/${idEtudiant}/${password}`, {})
  }

  updateImage(idEtudiant:number , newImage:any){
    return this.http.put(`${environment.baseUrl}/etudiant/updateImage/${idEtudiant}`, newImage)
  }
}

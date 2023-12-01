import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Reservation } from '../../models/reservation/reservation';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {

  constructor(private http: HttpClient) { }

  ajouterReservation(idChambre: number, cin: number) {
    return this.http.post(`${environment.baseUrl}/reservation/add/${idChambre}/${cin}`, null);
  }

  updateReservation(reservation: Reservation) {
    return this.http.put(`${environment.baseUrl}/reservation/update`, reservation);
  }

  getAllReservations() {
    return this.http.get<Reservation[]>(`${environment.baseUrl}/reservation/all`);
  }

  getReservationById(idReservation: number) {
    return this.http.get<Reservation>(`${environment.baseUrl}/reservation/${idReservation}`);
  }

  getCurrentReservationByEtudiantId(idEtudiant: number) {
    return this.http.get<Reservation>(`${environment.baseUrl}/reservation/getReservationsByEtudiantId/${idEtudiant}`);
  }

  annulerReservation(cin: number) {
    return this.http.put(`${environment.baseUrl}/reservation/annulerReservation/${cin}`, null);
  }
}

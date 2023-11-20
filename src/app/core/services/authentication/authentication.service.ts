import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Etudiant } from '../../models/etudiant/etudiant';
import { User } from '../../models/user/user';
import { LoginPayload } from '../../models/login-payload';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private http: HttpClient) { }

  registerEtudiant(etudiant: Etudiant) {
    return this.http.post(`${environment.baseUrl}/auth/registerEtudiant`, etudiant);
  }

  login(user: LoginPayload) {
    return this.http.post(`${environment.baseUrl}/auth/login`, user);
  }
}

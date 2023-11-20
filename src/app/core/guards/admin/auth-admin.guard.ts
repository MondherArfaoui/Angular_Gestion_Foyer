import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { Role } from '../../models/Role/role.enum';

@Injectable({
  providedIn: 'root'
})
export class AuthAdminGuard implements CanActivate {

  userconnect = JSON.parse(localStorage.getItem("userconnect")!);

  constructor(private route: Router) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (this.userconnect.role==Role.ADMIN)
      return true
    else {
      this.route.navigateByUrl('/**')
      return false
    }
  }
  
}

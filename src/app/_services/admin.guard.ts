import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthenticationService } from './authentication.service';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {
  constructor(
    private authService: AuthenticationService,
) {}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot) {
        let admin = sessionStorage.getItem('role')
        if (admin === 'admin') {
          return true
        } else {
          window.location.href = '/home'
          alert('Not Authorized')
          return false
        }
  }
}
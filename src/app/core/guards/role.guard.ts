import { Injectable } from '@angular/core';
import { CanActivate, Router, UrlTree, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class RoleGuard implements CanActivate {
  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  canActivate(route: ActivatedRouteSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const requiredRoles = route.data['roles'] as string[];
    
    if (!requiredRoles || requiredRoles.length === 0) {
      return true;
    }

    const user = this.authService.currentUserValue;
    if (!user) {
      this.router.navigate(['/auth/login']);
      return false;
    }

    const hasRequiredRole = requiredRoles.some(role => this.authService.hasRole(role));
    
    if (hasRequiredRole) {
      return true;
    }

    // User doesn't have required role, redirect to unauthorized page
    this.router.navigate(['/unauthorized']);
    return false;
  }
}

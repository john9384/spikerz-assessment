import { Injectable, signal, computed } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { environment } from '../../../environments/environment';

export interface User {
  id: string;
  email: string;
  name: string;
  role: string;
  permissions: string[];
}

export interface LoginCredentials {
  email: string;
  password: string;
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private currentUserSignal = signal<User | null>(null);
  public currentUser = this.currentUserSignal.asReadonly();
  public isAuthenticated = computed(() => !!this.currentUserSignal());

  constructor(private http: HttpClient) {
    this.loadStoredUser();
  }

  get currentUserValue(): User | null {
    return this.currentUserSignal();
  }

  login(credentials: LoginCredentials): Observable<User> {
    return this.http
      .post<User>(`${environment.apiUrl}/auth/login`, credentials)
      .pipe(
        map((user) => {
          this.storeUser(user);
          this.currentUserSignal.set(user);
          return user;
        })
      );
  }

  logout(): void {
    this.removeStoredUser();
    this.currentUserSignal.set(null);
  }

  refreshToken(): Observable<User> {
    return this.http.post<User>(`${environment.apiUrl}/auth/refresh`, {}).pipe(
      map((user) => {
        this.storeUser(user);
        this.currentUserSignal.set(user);
        return user;
      })
    );
  }

  hasPermission(permission: string): boolean {
    const user = this.currentUserValue;
    return user?.permissions.includes(permission) ?? false;
  }

  hasRole(role: string): boolean {
    const user = this.currentUserValue;
    return user?.role === role;
  }

  private storeUser(user: User): void {
    localStorage.setItem('currentUser', JSON.stringify(user));
  }

  private loadStoredUser(): void {
    const storedUser = localStorage.getItem('currentUser');
    if (storedUser) {
      try {
        const user = JSON.parse(storedUser);
        this.currentUserSignal.set(user);
      } catch {
        this.removeStoredUser();
      }
    }
  }

  private removeStoredUser(): void {
    localStorage.removeItem('currentUser');
  }
}

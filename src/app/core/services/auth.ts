import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private user: { username: string, role: string } | null = null;

  login(username: string, password: string): Observable<boolean> {
    if (username === 'admin' && password === 'admin123') {
      this.user = { username, role: 'admin' };
      localStorage.setItem('user', JSON.stringify(this.user));
      return of(true);
    } else if (username === 'user' && password === 'user123') {
      this.user = { username, role: 'user' };
      localStorage.setItem('user', JSON.stringify(this.user));
      return of(true);
    }
    return of(false);
  }

  logout(): void {
    this.user = null;
    localStorage.removeItem('user');
  }

  isAuthenticated(): boolean {
    return !!localStorage.getItem('user');
  }

  getUserRole(): string | null {
    const user = JSON.parse(localStorage.getItem('user') || '{}');
    return user.role || null;
  }

  getCurrentUserId(): string {
  // Example: return from localStorage, token, or internal state
    return 'EMP001'; // Replace with actual logic
  }
}
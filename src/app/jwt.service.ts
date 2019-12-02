import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class JwtService {

  constructor(private http: HttpClient) { }
  login(email: string, password: string) {
    return this.http.post<{access_token: string}>('http://localhost:3000/auth/signin', {email, password}).pipe(tap(res => {
    localStorage.setItem('access_token', res.access_token); 
    }))
  }
  signup(email: string, username: string, password: string) {
    return this.http.post<{access_token: string}>('http://localhost:3000/auth/signup', {username, email, password}).pipe(tap(res => {
    this.login(email, password)  
    }))
  }
  logout() {
    localStorage.removeItem('acces_token');
  }
  public get loggedIn(): boolean{
    return localStorage.getItem('acces_token') !== null;
  }
}

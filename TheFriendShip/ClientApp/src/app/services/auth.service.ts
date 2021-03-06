import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { JwtHelperService } from '@auth0/angular-jwt';
import { map } from 'rxjs/operators';

import { AuthUser, User } from '../models/user';
import { tokenGetter } from '../app.module';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  jwtHelper = new JwtHelperService();
  constructor(private http: HttpClient) { }

  login(user) {
    return this.http.post<AuthUser>('/api/auth/login', user)
      .pipe(map((result: AuthUser) => {
        if (result) {
          localStorage.setItem('token', result.tokenString);
          localStorage.setItem('user', JSON.stringify(result.user));
        }
        console.log(this.loggedInStatus());
        return result;
      }));
  }

  register(username: string, password: string) {
    return this.http.post('/api/auth/register', { username: username, password: password })
      .pipe(map(status => {
        
        if (status['Succeeded']) {
          console.log("User registration succeeded!");
          console.log("Welcome user: " + status['user'])
         
          localStorage.setItem('currentUser', JSON.stringify(status['user']));
        }
        return status;
      }));
  }

  loggedInStatus() {
    const token = tokenGetter();
    if (!token) return false;

    return !this.jwtHelper.isTokenExpired(token);
  }

  logOutUser() {
    return localStorage.removeItem('token');
  }
}

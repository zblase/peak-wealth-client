import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import {JwtHelperService} from '@auth0/angular-jwt';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  url = "http://localhost:5091/api/adminusers/"
  private userAuthenticated = false;

  constructor(private http: HttpClient, private router: Router) { }

  login(password: string) {
    this.http.get<{ token: string, expiresIn: number }>(this.url + 'login/' + password).subscribe((res) => {
      if (res.token) {
        this.userAuthenticated = true;
        setTimeout(() => {
          this.logout();
        }, res.expiresIn * 1000)
        sessionStorage.setItem('adminToken', res.token);

        this.router.navigate(['/admin'])
      }

    });
  }

  logout() {
    this.userAuthenticated = false;
    sessionStorage.removeItem('adminToken');
    this.router.navigate(['/login']);
  }

  isUserAuth() {
    return !!sessionStorage.getItem('adminToken');
    //return this.userAuthenticated;
  }
}

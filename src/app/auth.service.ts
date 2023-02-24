import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import {JwtHelperService} from '@auth0/angular-jwt';
import { Observable } from 'rxjs';
import { environment } from "src/environments/environment";

const URL = environment.apiUrl + "/adminusers/"

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  //url = "https://peakwealthtest.azurewebsites.net/api/adminusers/"
  private userAuthenticated = false;

  constructor(private http: HttpClient, private router: Router) { }

  login(password: string) {
    this.http.get<{ token: string, expiresIn: number }>(URL + 'login/' + password).subscribe((res) => {
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

  public isUserAuth(): Observable<boolean> {
    console.log(sessionStorage.getItem('adminToken'))
    var res = this.http.get<boolean>(URL + 'isvalid/' + sessionStorage.getItem('adminToken'));
    return res;
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable ({
  providedIn: 'root'
})
export class ProfileFormService {

  url: string = '';
  constructor(private http: HttpClient) {}

  sendForm(form: any) {
    this.http.post(this.url, form);
  }
}

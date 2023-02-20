import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable ({
  providedIn: 'root'
})
export class ProfileFormService {

  url: string = 'http://localhost:5091/api/profileforms';
  forms: any;

  constructor(private http: HttpClient) {}

  getForms(): Observable<any> {
    return this.http.get(this.url);
  }

  postForm(form: any) {
    this.http.post(this.url, form).subscribe((res) => {
      console.dir(res);

      this.getForms().subscribe((resp) => {
        console.dir(resp);
      })
    });
  }
}

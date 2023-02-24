import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from "src/environments/environment";

const URL = environment.apiUrl + "/profileforms/"

@Injectable ({
  providedIn: 'root'
})
export class ProfileFormService {

  //url: string = 'https://peakwealthtest.azurewebsites.net/api/profileforms';
  forms: any;

  constructor(private http: HttpClient) {}

  getForms(): Observable<any> {
    return this.http.get(URL);
  }

  postForm(form: any) {
    this.http.post(URL, form).subscribe((res) => {
      console.dir(res);

      this.getForms().subscribe((resp) => {
        console.dir(resp);
      })
    });
  }
}

import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form: FormGroup = new FormGroup({});
  constructor(private authService: AuthService){}

  ngOnInit(): void {
    this.form = new FormGroup({
      password: new FormControl('')
    })
  }

  login() {
    this.authService.login(this.form.value.password);
  }
}

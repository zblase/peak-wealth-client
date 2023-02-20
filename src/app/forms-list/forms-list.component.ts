import { Component, OnInit } from '@angular/core';
import { ProfileFormService } from '../profile-form/profile-form.service';

@Component({
  selector: 'app-forms-list',
  templateUrl: './forms-list.component.html',
  styleUrls: ['./forms-list.component.css']
})
export class FormsListComponent implements OnInit {

  forms: any;

  constructor(private formService: ProfileFormService) {}

  ngOnInit(): void {
    this.formService.getForms().subscribe({
      next: (res) => {
        this.forms = res;
        console.dir(res);
      },
      error: err => console.log(err),
      complete: () => console.log('completed')
    });
  }
}

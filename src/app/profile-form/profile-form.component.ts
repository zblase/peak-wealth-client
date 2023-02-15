import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-profile-form',
  templateUrl: './profile-form.component.html',
  styleUrls: ['./profile-form.component.css']
})
export class ProfileFormComponent implements OnInit {

  form: FormGroup = new FormGroup({});
  checked: boolean = false;

  
  constructor(){}

  ngOnInit(): void {
    this.form = new FormGroup({
      mStatus: new FormControl(),
      nameA: new FormControl(),
      ssnA: new FormControl(),
      dobA: new FormControl(),
      eStatusA: new FormControl(),
      eNameA: new FormControl(),
      occupationA: new FormControl(),
      eAddressA: new FormControl(),
      eCityA: new FormControl(),
      eStateA: new FormControl(),
      eZipA: new FormControl(),
      typeA: new FormControl(),
      idA: new FormControl(),
      issuerA: new FormControl(),
      expDateA: new FormControl(),
      nameB: new FormControl(),
      ssnB: new FormControl(),
      dobB: new FormControl(),
      eStatusB: new FormControl(),
      eNameB: new FormControl(),
      occupationB: new FormControl(),
      eBddressB: new FormControl(),
      eCityB: new FormControl(),
      eStateB: new FormControl(),
      eZipB: new FormControl(),
      typeB: new FormControl(),
      idB: new FormControl(),
      issuerB: new FormControl(),
      expDateB: new FormControl(),
      pAddress: new FormControl(),
      pCity: new FormControl(),
      pState: new FormControl(),
      pZip: new FormControl(),
      sAddress: new FormControl(),
      sCity: new FormControl(),
      sState: new FormControl(),
      sZip: new FormControl(),
      sDateA: new FormControl(),
      sDateB: new FormControl(),
      hPhone: new FormControl(),
      cPhone: new FormControl(),
      pEmail: new FormControl(),
      sEmail: new FormControl()
    })
  }

  submit() {

  }

}

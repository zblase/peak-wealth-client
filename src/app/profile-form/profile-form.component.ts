import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ProfileFormService } from './profile-form.service';

@Component({
  selector: 'app-profile-form',
  templateUrl: './profile-form.component.html',
  styleUrls: ['./profile-form.component.css']
})
export class ProfileFormComponent implements OnInit {

  form: FormGroup = new FormGroup({});
  states: string[] = ['AL', 'AK', 'AZ', 'AR', 'AS', 'CA', 'CO', 'CT', 'DE', 'FL', 'GA', 'GU', 'HI', 'ID', 'IL', 'IN', 'IA', 'KS', 'KY', 'LA', 'ME', 'MD', 'MA', 'MI', 'MN', 'MS', 'MO', 'MT', 'NE', 'NV', 'NH', 'NJ', 'NM', 'NY', 'NC', 'ND', 'OH', 'OK', 'OR', 'PA', 'RI', 'SC', 'SD', 'TN', 'TX', 'UT', 'VT', 'VA', 'WA', 'WV', 'WI', 'WY'];
  stateLabelValues: any[] = [
      { label:'Alabama', value: 'AL' },
      { label:'Alaska', value: 'AK'},
      { label:'Arizona', value: 'AZ'},
      { label:'Arkansas', value: 'AR'},
      { label:'California', value: 'CA'},
      { label:'Colorado', value: 'CO'},
      { label:'Connecticut', value: 'CT'},
      { label:'Delaware', value: 'DE'},
      { label:'Florida', value: 'FL'},
      { label:'Georgia', value: 'GA'},
      { label:'Hawaii', value: 'HI'},
      { label:'Idaho', value: 'ID'},
      { label:'Illinois', value: 'IL'},
      { label:'Indiana', value: 'IN'},
      { label:'Iowa', value: 'IA'},
      { label:'Kansas', value: 'KS'},
      { label:'Kentucky', value: 'KY'},
      { label:'Louisiana', value: 'LA'},
      { label:'Maine', value: 'ME'},
      { label:'Maryland', value: 'MD'},
      { label:'Massachusetts', value: 'MA'},
      { label:'Michigan', value: 'MI'},
      { label:'Minnesota', value: 'MN'},
      { label:'Mississippi', value: 'MS'},
      { label:'Missouri', value: 'MO'},
      { label:'Montana', value: 'MT'},
      { label:'Nebraska', value: 'NE'},
      { label:'Nevada', value: 'NV'},
      { label:'New Hampshire', value: 'NH'},
      { label:'New Jersey', value: 'NJ'},
      { label:'New Mexico', value: 'NM'},
      { label:'New York', value: 'NY'},
      { label:'North Carolina', value: 'NC'},
      { label:'North Dakota', value: 'ND'},
      { label:'Ohio', value: 'OH'},
      { label:'Oklahoma', value: 'OK'},
      { label:'Oregan', value: 'OR'},
      { label:'Pennsilvania', value: 'PA'},
      { label:'Rhode Island', value: 'RI'},
      { label:'South Carolina', value: 'SC'},
      { label:'South Dakota', value: 'SD'},
      { label:'Tennessee', value: 'TN'},
      { label:'Texas', value: 'TX'},
      { label:'Utah', value: 'UT'},
      { label:'Vermont', value: 'VT'},
      { label:'Virginia', value: 'VA'},
      { label:'Washington', value: 'WA'},
      { label:'West Virginia', value: 'WV'},
      { label:'Wisconsin', value: 'WI'},
      { label:'Wyoming', value: 'WY'}
    ];


  constructor(private formService: ProfileFormService){}

  ngOnInit(): void {
    this.form = new FormGroup({
      mStatus: new FormControl(),
      mDate: new FormControl(),
      mMonth: new FormControl(''),
      mDay: new FormControl(),
      mYear: new FormControl(),
      nameA: new FormControl(),
      ssnA: new FormControl(),
      dobA: new FormControl(),
      eStatusA: new FormControl(),
      eStatusOtherA: new FormControl(),
      eNameA: new FormControl(),
      eOccupationA: new FormControl(),
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
      eStatusOtherB: new FormControl(),
      eNameB: new FormControl(),
      eOccupationB: new FormControl(),
      eAddressB: new FormControl(),
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
    this.formService.sendForm(this.form.value);
  }

}

import { Component, EventEmitter,Output} from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import {TaxService} from '../tax.service';
import { TaxInfo} from '../tax-info';
@Component({
  selector: 'app-tax-form',
  templateUrl: './tax-form.component.html',
  styleUrls: ['./tax-form.component.css']
})
export class TaxFormComponent {
  @Output() taxCalculated = new EventEmitter<TaxInfo>();
  taxForm = this.fb.group({
    income: [null, Validators.required],
    country: ['Australia', Validators.required],
    year: ['2020-2021', Validators.required]
  });

  countries=[
    'Australia','England', 'America','Japan'];
  years=[
    '2020-2021','2019-2020','2018-2019','2017-2018'];

    
  
  constructor(private fb: FormBuilder,private taxService:TaxService) {}
 
  onSubmit(): void {
          if(this.taxForm.invalid) {
            return;
          }
          this.taxCalculated.emit(this.taxForm.value);
  }
}

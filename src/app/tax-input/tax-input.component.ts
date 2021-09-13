import { Component, OnInit } from '@angular/core';
import { TaxInfo,EstimatedTax,Hero } from '../tax-info';
import {TaxService} from '../tax.service';
import { FormBuilder, Validators } from '@angular/forms';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';

@Component({
  selector: 'app-tax-input',
  templateUrl: './tax-input.component.html',
  styleUrls: ['./tax-input.component.css']
})
export class TaxInputComponent implements OnInit {
  model=new TaxInfo('Australia', '2020-2021',0, );
 
  dataSource! : EstimatedTax[];
 
  countries=[
    'Australia','England', 'America','Japan'];
  years=[
    '2020-2021','2019-2020','2018-2019','2017-2018'];
    cardLayout = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
      map(({ matches }) => {
        if (matches) {
          return {
            cols: 2,
            rows: 2 
        
        };
         
        }
  
        return {
          cols: 1, 
          rows: 1     
         };
       
      })
    );
  constructor(private fb: FormBuilder,private taxService:TaxService,private breakpointObserver: BreakpointObserver) { }

  ngOnInit(): void {
 
  }
  getbrackets(): void {
    this.taxService.getBrackets()
        .subscribe(dataSource => this.dataSource = dataSource);
  }
  showTaxInput(taxInput: TaxInfo) {
   this.model=taxInput;
  }
}

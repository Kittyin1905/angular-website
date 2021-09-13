import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { TaxInfo,EstimatedTax,ELEMENT_DATA } from './tax-info';
@Injectable({
  providedIn: 'root'
})
export class TaxService {
  private bracketsUrl = 'api/brackets';  // URL to web api
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  constructor( private http: HttpClient) { }

  getBrackets(): Observable<EstimatedTax[]> {
    return this.http.get<EstimatedTax[]>(this.bracketsUrl);
  }
  /** PUT: update the hero on the server */
  calculateTax(taxInfo:TaxInfo): EstimatedTax[]{
   var estmatedTax= [
      {bracket: '$0-$18,200', cost: 0},
      {bracket: '$18201-$45,000', cost: 0},
      {bracket: '$45,001-$120,000', cost: 0},
      {bracket: '$120,001-$180,000', cost:0},
      {bracket: '$180,000+', cost:0}];
    if (taxInfo.income<18201){
    }else if(taxInfo.income<45001){
      estmatedTax.splice(1,1,{bracket: '$18,201-$45,000', cost:(taxInfo.income-18200)*0.19});
      console.log(taxInfo.income);
    } else if(taxInfo.income<120001){
      estmatedTax.splice(1,2,{bracket: '$18,201-$45,000', cost:5092},
      {bracket: '$45,001-$120,000', cost:(taxInfo.income-45000)*0.325});
    }else if(taxInfo.income<180001){
      estmatedTax.splice(1,3,{bracket: '$18,201-$45,000', cost:5092},
      {bracket: '$45,001-$120,000', cost:24375},
      {bracket: '$120,001-$180,000',cost:(taxInfo.income-120000)*0.37});
    }else{
      estmatedTax.splice(1,4,{bracket: '$18,201-$45,000', cost:5092},
      {bracket: '$45,001-$120,000', cost:24375},
      {bracket: '$120,001-$180,000',cost:22200},
      {bracket: '$180,000+', cost:(taxInfo.income-180000)*0.45});
    }
    return  estmatedTax;
  }
 
}

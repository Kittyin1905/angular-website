import { isNgTemplate } from '@angular/compiler';
import { AfterViewInit, Component,  OnChanges, SimpleChanges,OnInit,Input } from '@angular/core';
import { ELEMENT_DATA } from '../tax-info';
import { TaxInfo,EstimatedTax } from '../tax-info';
import {TaxService} from '../tax.service';
@Component({
  selector: 'app-tax-table',
  templateUrl: './tax-table.component.html',
  styleUrls: ['./tax-table.component.css']
})
export class TaxTableComponent implements OnChanges{
  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
 
  displayedColumns: string[] = ['bracket', 'cost'];
  dataSource! :EstimatedTax[];
  totalCost=0;
  @Input() taxInfo:any;
  constructor(private taxService:TaxService,) { }
  ngOnChanges(changes: SimpleChanges) {
    for (const propName in changes) {
      const chng = changes[propName];
      this.dataSource=this.getbrackets(chng.currentValue);
      let sum=0;
      this.dataSource.forEach(element =>sum+=element.cost);
      this.totalCost=sum;
    }
  }
  getbrackets(taxInfo:TaxInfo): EstimatedTax[] {
    return this.taxService.calculateTax(taxInfo);
  }
}

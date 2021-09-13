
import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { EstimatedTax   } from './tax-info';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 11, name: 'Dr Nice' },
      { id: 12, name: 'Narco' },
      { id: 13, name: 'Bombasto' },
      { id: 14, name: 'Celeritas' },
      { id: 15, name: 'Magneta' },
      { id: 16, name: 'RubberMan' },
      { id: 17, name: 'Dynama' },
      { id: 18, name: 'Dr IQ' },
      { id: 19, name: 'Magma' },
      { id: 20, name: 'Tornado' }
    ];

    const brackets = [
      {bracket: '$0-$18,200', cost: 0},
      {bracket: '$18201-$45,000', cost: 45000},
      {bracket: '$45,001-$120,000', cost: 120000},
      {bracket: '$120,001-$180,000', cost: 180000},
      {bracket: '$180,000+', cost: 0},
    ];
    return {brackets};
  }

}
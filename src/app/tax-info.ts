export class TaxInfo {

    constructor(
      public country: string,
      public year: string,
      public income: number
    ) {  }
   }
  export class Hero {

    constructor(
      public id: number,
      public name: string,
      public power: string,
      public alterEgo?: string
    ) {  }
  
  }
  export interface EstimatedTax {
    bracket: string;
    cost: number;
  }
  
  export const ELEMENT_DATA: EstimatedTax[] = [
    {bracket: '$0-$18,200', cost: 0},
    {bracket: '$18201-$45,000', cost: 5092},
    {bracket: '$45,001-$120,000', cost: 8125},
    {bracket: '$120,001-$180,000', cost: 0},
    {bracket: '$180,000+', cost: 0},
  ];
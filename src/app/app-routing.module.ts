import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TaxInputComponent } from './tax-input/tax-input.component';
import { FormComponent } from './form/form.component';
import { NavigationComponent } from './navigation/navigation.component';


const routes: Routes = [
  { path: '', component: NavigationComponent },
  { path: 'taxInput', component: TaxInputComponent },
  { path: 'form', component: FormComponent },
  
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

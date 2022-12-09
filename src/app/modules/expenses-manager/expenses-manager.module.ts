import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { ExpensesManagerRoutingModule } from './expenses-manager-routing.module';



@NgModule({
  declarations: [],
  imports: [
    SharedModule,
  ],
  exports: [SharedModule]
})
export class ExpensesManagerModule { }

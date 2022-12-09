import { NgModule } from '@angular/core';
import { CreateCashFlowPageRoutingModule } from './create-cash-flow-routing.module';
import { CreateCashFlowPage } from './create-cash-flow.page';
import { ExpensesManagerModule } from '../expenses-manager.module';

@NgModule({
  imports: [
    ExpensesManagerModule,
    CreateCashFlowPageRoutingModule
  ],
  declarations: [CreateCashFlowPage]
})
export class CreateCashFlowPageModule {}

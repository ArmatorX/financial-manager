import { NgModule } from '@angular/core';
import { GraphPageRoutingModule } from './graph-routing.module';
import { GraphPage } from './graph.page';
import { ExpensesManagerModule } from '../expenses-manager.module';

@NgModule({
  imports: [
    ExpensesManagerModule,
    GraphPageRoutingModule
  ],
  declarations: [GraphPage]
})
export class GraphPageModule {}

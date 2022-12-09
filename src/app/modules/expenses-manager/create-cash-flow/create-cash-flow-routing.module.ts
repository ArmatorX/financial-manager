import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreateCashFlowPage } from './create-cash-flow.page';

const routes: Routes = [
  {
    path: '',
    component: CreateCashFlowPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreateCashFlowPageRoutingModule {}

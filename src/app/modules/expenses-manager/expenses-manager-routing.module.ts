import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/app/shared/guards/auth/auth.guard';

const routes: Routes = [
  {
    path: 'expenses',
    canActivate: [AuthGuard],
    children: [
      {
        path: 'graph',
        loadChildren: () =>
          import('./graph/graph.module').then((m) => m.GraphPageModule),
      },
      {
        path: 'create',
        loadChildren: () =>
          import('./create-cash-flow/create-cash-flow.module').then((m) => m.CreateCashFlowPageModule),
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class ExpensesManagerRoutingModule {}

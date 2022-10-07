import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './shared/guards/auth/auth.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'graph',
    pathMatch: 'full',
  },
  {
    path: 'graph',
    canActivate: [AuthGuard],
    loadChildren: () =>
      import('./modules/expenses-manager/graph/graph.module').then(
        (m) => m.GraphPageModule
      ),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}

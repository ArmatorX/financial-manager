import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NoAuthGuard } from 'src/app/shared/guards/no-auth/no-auth.guard';

const routes: Routes = [
  {
    path: 'auth',
    children: [
      {
        path: 'login',
        // canActivate: [NoAuthGuard], // TODO: This guard is not working properly
        loadChildren: () =>
          import('./login/login.module').then((m) => m.LoginPageModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthenticationRoutingModule {}

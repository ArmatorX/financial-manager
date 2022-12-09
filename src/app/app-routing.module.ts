import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './shared/guards/auth/auth.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/auth/login',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules/*, relativeLinkResolution: 'legacy' */}),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}

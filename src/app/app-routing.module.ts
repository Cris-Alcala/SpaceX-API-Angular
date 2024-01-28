import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'spacex', loadChildren: () => import('./spacex/spacex.module').then(m => m.SpacexModule)},
  {path:'**', redirectTo:'spacex'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

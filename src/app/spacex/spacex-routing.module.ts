import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LaunchesComponent } from './pages/launches/launches.component';
import { RocketsComponent } from './pages/rockets/rockets.component';
import { LaunchinfoComponent } from './pages/launchinfo/launchinfo.component';

const routes: Routes = [
  {path:'launches', component:LaunchesComponent},
  {path:'rockets', component:RocketsComponent},
  {path:'launches/launchinfo/:id', component:LaunchinfoComponent},
  {path:'**', redirectTo:''}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SpacexRoutingModule { }

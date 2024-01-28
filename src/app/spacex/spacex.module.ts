import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SpacexRoutingModule } from './spacex-routing.module';
import { LaunchesComponent } from './pages/launches/launches.component';
import { RocketsComponent } from './pages/rockets/rockets.component';
import { LaunchinfoComponent } from './pages/launchinfo/launchinfo.component';


@NgModule({
  declarations: [
    LaunchesComponent,
    RocketsComponent,
    LaunchinfoComponent
  ],
  imports: [
    CommonModule,
    SpacexRoutingModule
  ]
})
export class SpacexModule { }

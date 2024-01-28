import { Component, OnInit } from '@angular/core';
import { Launch } from '../../interfaces/Launch.interface';
import { SpacexService } from '../../services/spacex.service';

@Component({
  selector: 'app-launches',
  templateUrl: './launches.component.html',
})
export class LaunchesComponent implements OnInit {
  launches!: Launch[];
  upcomingLaunches!: Launch[];

  constructor(private service: SpacexService) { }

  ngOnInit(): void {
    this.getLaunches();
  }

  getLaunches(): void {
    this.service.getAPILaunches().subscribe(data => {
      this.launches = data;
      this.upcomingLaunches = this.launches.filter(launch => launch.upcoming === true);
    })
  }
}

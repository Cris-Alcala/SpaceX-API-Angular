import { Component, OnInit } from '@angular/core';
import { Rocket } from '../../interfaces/Rocket.interface';
import { SpacexService } from '../../services/spacex.service';

@Component({
  selector: 'app-rockets',
  templateUrl: './rockets.component.html',
  styleUrl: './rockets.component.css'
})
export class RocketsComponent implements OnInit{
  rockets!:Rocket[];
  maxWeightRocket!:Rocket;

  constructor(private service:SpacexService) { }

  ngOnInit(): void {
    this.service.getAPIRockets().subscribe(data => {
      this.rockets = data;
      this.maxWeightRocket = this.rockets.reduce((max, rocket) => rocket.mass.kg > max.mass.kg ? rocket:max, this.rockets[0]);
    })
  }
}

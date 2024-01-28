import { Component, OnInit } from '@angular/core';
import { Launch } from '../../interfaces/Launch.interface';
import { SpacexService } from '../../services/spacex.service';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';

@Component({
  selector: 'app-launchinfo',
  templateUrl: './launchinfo.component.html',
  styleUrl: './launchinfo.component.css'
})
export class LaunchinfoComponent implements OnInit{
  launch!:Launch;

  constructor(private service:SpacexService, private router:Router, private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.pipe(
      switchMap(({id}) => this.service.getSpecificAPILaunch(id))
    ).subscribe(data => {
      if(data===null) return this.router.navigateByUrl('');
      this.launch = data;
      return this.launch;
    })
  }
}

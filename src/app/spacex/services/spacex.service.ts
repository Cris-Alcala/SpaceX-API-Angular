import { Injectable } from '@angular/core';
import { Launch } from '../interfaces/Launch.interface';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Rocket } from '../interfaces/Rocket.interface';
import { Observable, catchError, map, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpacexService {
  _endpoint_launches:string = 'https://api.spacexdata.com/v5/launches';
  _endpoint_rockets:string = 'https://api.spacexdata.com/v4/rockets';

  constructor(private http:HttpClient) { }

  getAPILaunches():Observable<Launch[]> {
    return this.http.get<Launch[]>(this._endpoint_launches);
  }

  getAPIRockets():Observable<Rocket[]> {
    return this.http.get<Rocket[]>(this._endpoint_rockets);
  }

  getSpecificAPILaunch(id:string):Observable<Launch> {
    return this.http.get<Launch>(`${this._endpoint_launches}/${id}`)
  }

  getSpecificRocket(id:string):Observable<Rocket> {
    return this.http.get<Rocket>(`${this._endpoint_rockets}/${id}`)
  }
}

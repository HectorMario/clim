import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { environment } from 'app/enviroment/enviroment';
import { Root } from 'app/models/weather';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherServiceService {
  constructor(private http: HttpClient) {  }

  getWeather(city: string): Observable<Root>{
     return this.http.get<Root>(`${environment.apiUrl}`, {params: {q : city}});
  }
}

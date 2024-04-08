import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  private apiKey = "14c8956af38722a5c16758d595277c3b";

  constructor(private http: HttpClient){}

  getWeatherData(cidade: string): Observable<any>
  {
    return this.http.get(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&units=metric&mode=json&appid=${this.apiKey}`)
  }
}

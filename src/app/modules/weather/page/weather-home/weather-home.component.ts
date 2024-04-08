import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../../services/weather.service';
import { WeatherData } from 'src/app/modules/models/interfaces/weather.interface';

@Component({
  selector: 'app-weather-home',
  templateUrl: './weather-home.component.html',
  styleUrls: []
})
export class WeatherHomeComponent implements OnInit{
  constructor(private weatherService: WeatherService){}
  public weatherData!: WeatherData;

  ngOnInit(): void {
    this.getWeatherData('Cascavel');
  }

  getWeatherData(cidade: string): void
  {
    this.weatherService.getWeatherData(cidade).subscribe({
      next: (response) => {
        response && (this.weatherData = response);
        console.log(this.weatherData)
      },
      error: (error) => console.log(error)
    })
  }
}

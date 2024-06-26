import { Component, OnDestroy, OnInit } from '@angular/core';
import { WeatherService } from '../../services/weather.service';
import { WeatherData } from 'src/app/modules/models/interfaces/weather.interface';
import { Subject, takeUntil } from 'rxjs';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-weather-home',
  templateUrl: './weather-home.component.html',
  styleUrls: []
})
export class WeatherHomeComponent implements OnInit, OnDestroy{
  private readonly destroy$: Subject<void> = new Subject();
  constructor(private weatherService: WeatherService){}
  public weatherData!: WeatherData;
  public inicialCityName: string = "Cascavel";
  public searchIcon = faMagnifyingGlass;

  ngOnInit(): void {
    this.getWeatherData('Cascavel');
  }

  getWeatherData(cidade: string): void
  {
    this.weatherService.getWeatherData(cidade)
    .pipe(
      takeUntil(this.destroy$)
    )
    .subscribe({
      next: (response) => {
        response && (this.weatherData = response);
        console.log(this.weatherData)
      },
      error: (error) => console.log(error)
    })
  }

  onSubmit(): void
  {
    this.getWeatherData(this.inicialCityName);
    this.inicialCityName = "";
  }

  ngOnDestroy(): void
  {
    this.destroy$.next();
    this.destroy$.complete();
  }
}

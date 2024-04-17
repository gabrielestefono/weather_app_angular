import { Component, Input } from '@angular/core';
import { faDroplet, faTemperatureHigh, faTemperatureLow, faWind } from '@fortawesome/free-solid-svg-icons';
import { WeatherData } from 'src/app/modules/models/interfaces/weather.interface';

@Component({
  selector: 'app-weather-card',
  templateUrl: './weather-card.component.html',
  styleUrls: []
})
export class WeatherCardComponent{
  @Input() weatherDataInput!: WeatherData;

  minTemperaturaIcon = faTemperatureLow;
  maxTemperaturaIcon = faTemperatureHigh;
  humidadeIcon = faDroplet;
  vento = faWind;
}

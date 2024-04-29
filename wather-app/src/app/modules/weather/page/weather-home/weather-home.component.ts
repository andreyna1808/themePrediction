import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../../services/weather.service';
import { response } from 'express';
import { WeatherDatas } from '../../../../models/interfaces/WeatherDatas';

@Component({
  selector: 'app-weather-home',
  standalone: true,
  imports: [],
  templateUrl: './weather-home.component.html',
})
export class WeatherHomeComponent implements OnInit {
  initialCityName = 'São Paulo';
  weatherDatas!: WeatherDatas;

  constructor(private weatherService: WeatherService) {}

  ngOnInit(): void {
    this.getWeatherDatas(this.initialCityName);
  }

  getWeatherDatas(cityName: string): void {
    this.weatherService.getWeatherDatas(cityName).subscribe({
      next: (response) => {
        response && (this.weatherDatas = response);
        console.log(response);
      },
      error: (error) => console.log(error),
    });
  }
}

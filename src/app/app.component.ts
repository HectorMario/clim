import { Component, Host, OnInit } from '@angular/core';
import { WeatherServiceService } from './services/weather-service.service';
import { Current, Location } from 'app/models/weather';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  current!: Current;
  location!: Location;
  showDate!: any;
  search: string = '';
  hourDay!: number;
  loading: boolean = true;
  cities: Array<string> = ['New york', 'California', 'Paris', 'Tokyo']
  constructor(private weather: WeatherServiceService) {};
  ngOnInit(): void {
    this.getWeather("cali")
  }

 

  getWeather(city: string){
    this.loading = true;
    this.weather.getWeather(city).subscribe({
      next: res =>{
        this.location = res.location;
        this.current = res.current;
        const timeDate:Date = this.getTime(this.location.localtime)
        this.showDate = this.stringDateShow(timeDate)
        this.search = '';
        this.loading = false;
      }
    })
  }

  getTime(date: string): Date {
    return new Date(date)
  }

  stringDateShow(date: Date){
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const hour = date.getHours();
    const minutes = date.getMinutes();
    const year = date.getFullYear();
    const month = date.getMonth();
    const day = date.getDate();
    const dayName =days[date.getDay()];
    const formattedMinutes = minutes.toString().padStart(2, '0');
    this.hourDay = hour
    const timeShow = `${hour}:${formattedMinutes} - ${dayName} ${day}, 0${month+1} ${year}` 
    return timeShow
  }
}

import { WeatherCallService } from './../../services/weather-call.service';
import { Component, OnInit } from '@angular/core';
import { weatherDto } from 'src/app/services/Dto/weatherDto.dto';
import { BehaviorSubject, debounceTime, distinctUntilChanged, Observable, Subject, switchMap, tap, of, catchError, distinct } from 'rxjs';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  loading:boolean = false;
  findWeatherbySearchWithCityName$!: Observable<weatherDto[]>;
  private subject$ = new Subject<string>()
  constructor( private weatherService: WeatherCallService) {

  }





  ngOnInit(): void{
 this.findWeatherbySearchWithCityName$ =  this.subject$.pipe(
  tap(_ =>this.loading = true),
  debounceTime(300),
 distinctUntilChanged(),
 switchMap((term:string) =>this.weatherService.getWeatherDataByCityName(term)),
tap((_) =>this.loading = false)
)
  }
  search($event: string){
    this.subject$.next($event)
  }





  }










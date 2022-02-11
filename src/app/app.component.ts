import { Component } from '@angular/core';
import { weatherDto } from 'src/app/services/Dto/weatherDto.dto';
import { BehaviorSubject, debounceTime, distinctUntilChanged, Observable, Subject, switchMap, tap, of, catchError } from 'rxjs';
import { WeatherCallService } from './services/weather-call.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'AngularTempeleate';
  loading:boolean = false;
  findWeatherbySearchWithCityName$!: Observable<weatherDto[]>;
  private subject$ = new Subject<string>()
  constructor( private weatherService: WeatherCallService) { }





  ngOnInit(): void{
this.findWeatherbySearchWithCityName$ = this.subject$.pipe(
  tap(_ =>this.loading = true),
  debounceTime(300),
distinctUntilChanged(),
switchMap((term:string) =>this.weatherService.getWeatherDataByCityName(term)),
tap((_) =>this.loading = false)


)
  }


  search($event:string){
    this.subject$.next($event)
  }


}

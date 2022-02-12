import { Injectable, TemplateRef } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http'
import { weatherDto } from './Dto/weatherDto.dto';
import { BehaviorSubject, catchError, debounceTime, Observable, of, throwError, filter } from 'rxjs';
import { map, share } from 'rxjs/operators';
import { weatherImage } from './Dto/weatherImage.dto';

@Injectable({
  providedIn: 'root'
})
export class WeatherCallService {

  constructor(private http:HttpClient) { }


     url = 'https://www.metaweather.com/api/location/search/'
   url2 = 'https://www.metaweather.com/api/static/img/weather/png/'

 getWeatherDataByCityName(query:string):Observable<weatherDto[]>{

   let params = new HttpParams()
    .set('query',query)


   return this.http.get<weatherDto[]>(this.url,{params}).pipe(
   map((res) => res),
   catchError(err =>{
     console.log('err',err);
     return of([]);
   })


   )

}

getWeatherDataByCoords(weather_state_name:string ):Observable<weatherImage[]>{
  let params = new HttpParams()
  .set('X.png',weather_state_name)

  return this.http.get<weatherImage[]>(this.url2,{params}).pipe(map((res) =>res))
}

}

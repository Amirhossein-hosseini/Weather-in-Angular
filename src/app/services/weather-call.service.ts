import { Injectable, TemplateRef } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http'
import { weatherDto } from './Dto/weatherDto.dto';
import { BehaviorSubject, catchError, debounceTime, Observable, of, throwError, filter } from 'rxjs';
import { map, share, take } from 'rxjs/operators';
import { weatherImage } from './Dto/weatherImage.dto';

@Injectable({
  providedIn: 'root'
})
export class WeatherCallService {

  constructor(private http:HttpClient) { }


     url = 'https://www.metaweather.com/api/location/search/'
     url2 = 'https://www.metaweather.com/api/location/'

 getWeatherDataByCityName(query:string):Observable<weatherDto[]>{

   let params = new HttpParams()
    .set('query',query)


   return this.http.get<weatherDto[]>(this.url,{params}).pipe(
   map((res) => res.filter((res) =>res.title === res.title)),
   catchError(err =>{
     console.log('err',err);
     return of([]);
   })


   )

}

getLocationbywoeid(woeid:number,applicable_date:string):Observable<weatherDto[]>{
  let params = new HttpParams()
  .set('woeid',woeid)
  .set('applicable_date',applicable_date)

  return this.http.get<weatherDto[]>(this.url2,{params}).pipe(
    take(2),
    map((res) =>res.filter((res) =>res.woeid === res.woeid && res.applicable_date === res.applicable_date)),


  )
}
}



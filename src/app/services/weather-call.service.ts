import { Injectable, TemplateRef } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http'
import { weatherDto } from './Dto/weatherDto.dto';
import { BehaviorSubject, catchError, debounceTime, Observable, of, throwError, filter } from 'rxjs';
import { map, share, mergeAll, mergeMap, mergeMapTo } from 'rxjs/operators';
import { weatherImage } from './Dto/weatherImage.dto';
import { getLocaleDateFormat } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class WeatherCallService {

  constructor(private http:HttpClient) { }


     url = 'https://www.metaweather.com/api/location/search/'
     url2 ='https://www.metaweather.com/api/location/'

 getWeatherDataByCityName(query:string):Observable<weatherImage[]>{

   let params = new HttpParams()
    .set('query',query)



   return this.http.get<weatherImage[]>(this.url,{params}).pipe(
   map(res => res),

   catchError(err =>{
     console.log('err',err);
     return of([]);
   })


   )

  }

  getWeatherDataBywoeid(woeid:number){
    let params = new HttpParams()
         .set('woeid',woeid)


       return this.http.get<weatherImage[]>(this.url2,{params})
  }

  GetLocationbyLatt_Long(latt:number,long:number):Observable<weatherImage[]>{
    let params = new HttpParams()
    .set('latt',latt)
    .set('long',long)

    return this.http.get<weatherImage[]>(this.url2,{params})
  }

}





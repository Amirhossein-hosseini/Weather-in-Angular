import { Injectable, TemplateRef } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http'
import { weatherDto } from './Dto/weatherDto.dto';
import { BehaviorSubject, catchError, debounceTime, Observable, of, throwError, filter } from 'rxjs';
<<<<<<< HEAD
import { map, share, take } from 'rxjs/operators';
=======
import { map, share, mergeAll, mergeMap, mergeMapTo } from 'rxjs/operators';
>>>>>>> cc8987472998afda7a5985ce03bd41971a784695
import { weatherImage } from './Dto/weatherImage.dto';
import { getLocaleDateFormat } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class WeatherCallService {

  constructor(private http:HttpClient) { }


     url = 'https://www.metaweather.com/api/location/search/'
<<<<<<< HEAD
     url2 = 'https://www.metaweather.com/api/location/'
=======
     url2 ='https://www.metaweather.com/api/location/'
>>>>>>> cc8987472998afda7a5985ce03bd41971a784695

 getWeatherDataByCityName(query:string):Observable<weatherImage[]>{

   let params = new HttpParams()
    .set('query',query)


<<<<<<< HEAD
   return this.http.get<weatherDto[]>(this.url,{params}).pipe(
   map((res) => res.filter((res) =>res.title === res.title)),
=======

   return this.http.get<weatherImage[]>(this.url,{params}).pipe(
   map(res => res),

>>>>>>> cc8987472998afda7a5985ce03bd41971a784695
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

<<<<<<< HEAD
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
=======

>>>>>>> cc8987472998afda7a5985ce03bd41971a784695



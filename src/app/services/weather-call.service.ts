import { Injectable, TemplateRef } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http'
import { weatherDto } from './Dto/weatherDto.dto';
import { BehaviorSubject, catchError, debounceTime, Observable, of, throwError } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class WeatherCallService {

  constructor(private http:HttpClient) { }



   url = 'https://www.metaweather.com/api/location/search/'

 getWeatherDataByCityName(query:string):Observable<weatherDto[]>{


let url = `${this.url}?${query}`

if(!query.trim()){
  return of([])
}

return this.http.get<weatherDto[]>(url).pipe(catchError(this.handleError<weatherDto[]>('query',[])));

  //  let params = new HttpParams()
  //  .set('query',query)

  //  return this.http.get<weatherDto>(this.url,{params}).pipe(

  //   debounceTime(1),

  //  map((res) => res),
  //  catchError(err =>{
  //    return of();
  //  })

  //  )



 }


 private handleError<T>(operation = 'operation', result?: T) {
  return (error: any): Observable<T> => {
    console.log(`failed: ${error.message}`);
    return of(result as T);
  };
}
}

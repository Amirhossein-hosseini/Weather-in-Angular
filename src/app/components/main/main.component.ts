import { map, mergeAll, mergeMap, take } from 'rxjs/operators';
import { weatherImage } from './../../services/Dto/weatherImage.dto';
import { WeatherCallService } from './../../services/weather-call.service';
import { Component, OnInit } from '@angular/core';
import { weatherDto } from 'src/app/services/Dto/weatherDto.dto';
import { BehaviorSubject, debounceTime, distinctUntilChanged, Observable, Subject, switchMap, tap, of, catchError, distinct, filter } from 'rxjs';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  flag: boolean = true;

  coords!:Icoords
  loading:boolean = false;
  weatherData:any =[]
  findWeatherbySearchWithCityName$!: Observable<weatherImage[]>
  private subject$ = new Subject<string>()
  constructor( private weatherService: WeatherCallService) {

  }





  ngOnInit(): void{


//  this.findWeatherbySearchWithCityName$ =  this.subject$.pipe(
//   tap(_ =>this.loading = true),
//    debounceTime(300),
//    distinctUntilChanged(),
//  switchMap(  (term) => this.getCity(term)),
// tap((_) =>this.loading = false)
//  )


    // if(navigator.geolocation){
    //   navigator.geolocation.getCurrentPosition(position =>{
    //     this.getLocation(this.coords)
    //   })
    // }


  }






  search($event: string){

    this.subject$.next($event)
  }

  getLocation(position:weatherImage):Observable<weatherImage[]>{

  let data = this.weatherService.getWeatherDataBywoeid(position.woeid)
return data
  //  let data = this.weatherService.getWeatherDataBywoeid(position.woeid)
  //  if(data){
  //    data = this.weatherData
  //  }


  //  return data


  }

  getCity(city:string){

let data = this.weatherService.getWeatherDataByCityName(city).subscribe((res) =>{
  this.weatherData = res
})


  }





    // if(city.woeid === city.){
    //   this.findWeatherbySearchWithCityName$ = this.subject$.pipe(
    //     tap(_ =>this.loading=true),
    //     debounceTime(300),
    //     distinctUntilChanged(),
    //     switchMap((term) =>this.weatherService.getWeatherDataByCityName(term)),
    //     tap(_ =>this.loading=false)

    //   )

    //   }

    // let data = this.weatherService.getWeatherDataByCityName(city.title)

// if(city.woeid === this.currentLocation()){
// this.findWeatherbySearchWithCityName$ = this.subject$.pipe(
//   tap(_ =>this.loading=true),
//   debounceTime(300),
//   distinctUntilChanged(),
//   switchMap((term) =>this.weatherService.getWeatherDataByCityName(term)),
//   tap(_ =>this.loading=false)

// )

// }

// return data

    //   if(data){
    //     this.findWeatherbySearchWithCityName$ = data
    //   }
    // return data
    // this.findWeatherbySearchWithCityName$ = citys





    // return citys




  ngOnDestroy(): void {
   this.subject$.complete()

  }

}





interface woeid {
  woeid:number|null
}

interface Icoords{
  latt:number|null,
  long:number
}





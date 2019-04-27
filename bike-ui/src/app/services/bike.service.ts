import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
//import {Observable} from 'rxjs/Observable';

const httpOptions = {
  headers : new HttpHeaders({'content-type':'application/json'})
}
@Injectable({
  providedIn: 'root'
})
export class BikeService {

  constructor(private appHttp: HttpClient) { }

  getBikes(){
    return this.appHttp.get('server/api/vi/bikes');
  }

  getBike(id: number){
    return this.appHttp.get('/server/api/vi/bikes/' + id);
  }

  createBikeRegistration(bike: any){
    let body = JSON.stringify(bike);
    return this.appHttp.post('server/api/vi/bikes', body, httpOptions);
  }
}

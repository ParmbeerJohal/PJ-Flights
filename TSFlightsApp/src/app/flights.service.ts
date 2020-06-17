import { Injectable, OnInit } from '@angular/core';
import { Flight } from './flight.model';
import { Observable } from 'rxjs';
import { HttpClient} from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class FlightsService {

  constructor(private http: HttpClient) {
    this.backEndURL = this.getBackEndURL();
  }

  backEndURL: string;

  getFlights(orig: string, dest: string): Observable<any> {
    return this.http.get(`${this.backEndURL}/flights/query/${orig}/${dest}`);
  }

  getAllFlights(): Observable<any> {
    return this.http.get(`${this.backEndURL}/flights`);
  }

  getAllOrigins(): Observable<any> {
    return this.http.get(`${this.backEndURL}/flights/cities/origins`);
  }

  getAllDestinations(): Observable<any> {
    return this.http.get(`${this.backEndURL}/flights/cities/destinations`);
  }

  postFlight(flight: Flight) {
    return this.http.post(`${this.backEndURL}/flights`,flight).subscribe(data =>{
      console.log("data posted to server!")
    })
  }

  deleteFlight(id: number) {
    
  }

  updateFlight(flight:Flight) {
    return this.http.post(`${this.backEndURL}/flights/${flight.id}/update`, flight);
  }

  getBackEndURL(): string {
    const segments = document.URL.split('/');
    const reggie = new RegExp(/localhost/);
    return reggie.test(segments[2]) ? 'http://localhost:3002' : 'https://nestjs-typeorm-postgres.herokuapp.com';
  }

}

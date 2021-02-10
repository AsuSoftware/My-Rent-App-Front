import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Geolocation } from './../interfaces/geolocation';

@Injectable({
  providedIn: 'root'
})
export class GeolocationService {

  private apiGoogleKey = "5e8dc5c266c46ba2d83e979f1bd506a6";

  public constructor(private http: HttpClient) { }

  // ask user for acces his location
  public getCurrentLocation(): Promise<{lng: number, lat: number}> {
    return new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(resp => {
        resolve({lng: resp.coords.longitude, lat: resp.coords.latitude})
      })
    });
  }

  // get current city of user
  public getCity(lat: number, lng: number): Observable<Geolocation[] | Geolocation> {
    return this.http.get<Geolocation[] | Geolocation>(`http://api.positionstack.com/v1/reverse?access_key=${this.apiGoogleKey}&query=${lat},${lng}`);
  }
}

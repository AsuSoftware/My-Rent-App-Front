import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GeolocationService {

  public constructor(private http: HttpClient) { }

  // ask user for acces his location
  public getCurrentLocation(): Promise<{lng: number, lat: number} | string> {
    return new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(resp => {
        resolve({lng: resp.coords.longitude, lat: resp.coords.latitude})
      })
    });
  }

  // get current city of user
  public getCity(lat: number, lng: number): Observable<any> {
    return this.http.get<any>(`http://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&sensor=true`);
  }
}

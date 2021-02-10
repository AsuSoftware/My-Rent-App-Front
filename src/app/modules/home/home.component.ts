import { GeolocationService } from './../../common/services/geolocation.service';
import { Component, OnInit } from '@angular/core';
import { Geolocation } from './../../common/interfaces/geolocation';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public constructor(private geolocation: GeolocationService) { }

  public ngOnInit(): void {
   // this.getCurrentPosition();
  }

  getCurrentPosition(): void {
    this.geolocation.getCurrentLocation().then(resp => {
      this.geolocation.getCity(resp.lat, resp.lng).subscribe((data:Geolocation) => {
          console.log(data);
      });
    });
  }

}

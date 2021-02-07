import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  public readonly url = 'localhost:8080';

  public constructor() { }

  // Interface are used as data types for data that comes from external service, like server
  // Class are used as data types for data that are in the current service(for ex in components Angular)

}

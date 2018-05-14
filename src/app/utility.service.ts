import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class UtilityService {

  private dummyDataUrl = 'assets/dummydata.json';

  constructor(private http : HttpClient) { 

  }

  getEmployeeDetails() {
    return this.http.get(this.dummyDataUrl);
  }

 
}

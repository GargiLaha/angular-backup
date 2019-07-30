import { Injectable } from '@angular/core';

import { IEmployee } from './employee';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import { HttpErrorResponse, HttpClient } from '@angular/common/http';
import 'rxjs/add/observable/throw';

@Injectable({
  providedIn: 'root'
})
export class EmployeeServiceService {
  private _url: string = "/assets/data/employees.json";

  constructor(private http: HttpClient) {  }


    getEmployees() : Observable<IEmployee[]>{

        return this.http.get<IEmployee[]>(this._url)._catch(this.errorHandler);
      }
      errorHandler(error: HttpErrorResponse)
      {
        return Observable.throw(error.message ||"null");
      }
}

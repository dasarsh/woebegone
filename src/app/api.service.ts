import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  public jsonData = [];

  constructor(private http: HttpClient) {
  }

  public get(): Observable<JSON>{
    var result = this.http.get<JSON>("https://www.reddit.com/r/tifu.json");
    return result;
  }
}

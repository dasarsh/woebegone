import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  public jsonData: Observable<JSON>;

  constructor(private http: HttpClient) {
  }

  public get(): Observable<JSON>{
    this.jsonData = this.http.get<JSON>("https://www.reddit.com/r/tifu.json");
    return this.jsonData;
  }
}

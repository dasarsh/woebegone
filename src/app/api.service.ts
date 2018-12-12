import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  public jsonData = [];

  constructor(private http: HttpClient) {
  }

  public get<T>(): void {
    fetch('https://www.reddit.com/r/tifu.json')
      .then(response => response.json())
      .then(json => this.jsonData = json)

      console.log(this.jsonData);
  }
}

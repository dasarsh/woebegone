import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Section } from './section';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  public jsonData: any;
  public sections: Section[] = [];

  constructor(private http: HttpClient) {
  }

  public get(): Observable<JSON> {
    const jsonData = this.http.get<JSON>('https://www.reddit.com/r/popular.json');
    return jsonData;
  }

  public processJson(limit: number): void {
    this.get().subscribe(json => {
      this.jsonData = json

      this.sections = [];
      this.jsonData.data.children.forEach(child => {
        if (this.sections.length < limit) {
          this.sections.push(
            new Section(child.data.title, new Date(child.data.created * 1000),
              child.data.url, child.data.over_18 === true, child.data.subreddit)
          );
        }
      });
    });
  }
}

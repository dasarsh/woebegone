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
    this.get().subscribe(json => this.jsonData = json);
  }

  public get(): Observable<JSON>{
    var jsonData = this.http.get<JSON>("https://www.reddit.com/r/popular.json");
    return jsonData;
  }

  public processJson(): void{
    this.jsonData.data.children.forEach(child => {
      // console.log(child.data.subreddit);
      // console.log(child.data.over_18);
      // console.log(child.data.url);
      // console.log(child.data.created);
      this.sections.push(
        new Section(child.data.title, new Date(child.data.created * 1000), child.data.url, child.data.over_18 == true, child.data.subreddit)
      );
    });
    console.log(JSON.stringify(this.sections));
  }

  public clearSections(): void{
    this.sections = [];
    this.get().subscribe(json => this.jsonData = json);
  }
}

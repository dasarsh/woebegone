import { Component, OnInit, Input } from '@angular/core';
import { ApiService } from '../api.service';

export class Section {
  name: string;
  updated: Date;
  upvotes: number;
  link: URL;
  nsfw: boolean;
  tag: string;

  constructor(name: string, updated: Date, link: URL, nsfw: boolean){
    this.name = name;
    this.updated = updated;
    this.link = link;
    this.nsfw = nsfw;
  }
}

@Component({
  selector: 'app-calc-links',
  templateUrl: './calc-links.component.html',
  styleUrls: ['./calc-links.component.scss']
})
export class CalcLinksComponent implements OnInit {
  folders: Section[];

  @Input() jsonData: any;

  constructor(private apiService: ApiService) { 
    this.folders = apiService.sections;
  }

  ngOnInit() {
  }

}

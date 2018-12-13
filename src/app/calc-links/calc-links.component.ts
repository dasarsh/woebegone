import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';

export interface Section {
  name: string;
  updated: Date;
  upvotes: number;
  link: URL;
  nsfw: boolean;
  tag: string;
}

@Component({
  selector: 'app-calc-links',
  templateUrl: './calc-links.component.html',
  styleUrls: ['./calc-links.component.scss']
})
export class CalcLinksComponent implements OnInit {
  folders: Section[] = [
    {
      name: 'Link 1',
      updated: new Date('1/1/16'),
      upvotes: 69,
      link: new URL('https://www.google.com'),
      nsfw: false,
      tag: 'funny',
    },
    {
      name: 'Link 2',
      updated: new Date('1/17/16'),
      upvotes: 420,
      link: new URL('https://www.google.com'),
      nsfw: false,
      tag: 'sad',
    },
    {
      name: 'Link 3',
      updated: new Date('1/28/16'),
      upvotes: 1337,
      link: new URL('https://www.google.com'),
      nsfw: true,
      tag: 'nsfw',
    }
  ];

  @Input() jsonData: Observable<JSON>;

  constructor() { 
    
  }

  ngOnInit() {
  }

}

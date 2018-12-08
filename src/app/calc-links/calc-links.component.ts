import { Component, OnInit } from '@angular/core';

export interface Section {
  name: string;
  updated: Date;
  upvotes: number;
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
      upvotes: 69
    },
    {
      name: 'Link 2',
      updated: new Date('1/17/16'),
      upvotes: 420
    },
    {
      name: 'Link 3',
      updated: new Date('1/28/16'),
      upvotes: 1337
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}

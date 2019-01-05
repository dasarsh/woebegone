import { Component, OnInit, Input } from '@angular/core';
import { ApiService } from '../api.service';
import { Section } from '../section';

@Component({
  selector: 'app-calc-links',
  templateUrl: './calc-links.component.html',
  styleUrls: ['./calc-links.component.scss']
})
export class CalcLinksComponent implements OnInit {
  @Input() links: Section[];

  constructor(private apiService: ApiService) {
  }

  ngOnInit() {
  }

}

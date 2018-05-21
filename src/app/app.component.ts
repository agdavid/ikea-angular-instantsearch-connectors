import { Component, AfterViewInit } from '@angular/core';

import { InstantsearchService } from './services/instantsearch.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  title = 'Ikea Angular Instantsearch';

  constructor(private instantsearchService: InstantsearchService) {}

  ngAfterViewInit() {
    this.instantsearchService.search.start();
  }

}

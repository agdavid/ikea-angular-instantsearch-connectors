import { Component, OnInit } from '@angular/core';
import { InstantsearchService } from '../../services/instantsearch.service';

@Component({
  selector: 'app-search-box',
  template: `
    <p>
      search-box Works!
    </p>
  `,
  styles: []
})
export class SearchBoxComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

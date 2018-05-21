import { Component, OnInit } from '@angular/core';
import { InstantsearchService } from '../../services/instantsearch.service';

@Component({
  selector: 'app-hits',
  template: `
    <p>
      hits Works!
    </p>
  `,
  styles: []
})
export class HitsComponent implements OnInit {

  constructor(private instantsearchService: InstantsearchService) { }

  ngOnInit() {
  }

}

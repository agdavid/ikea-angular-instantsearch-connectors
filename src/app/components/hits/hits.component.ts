import { Component, OnInit } from '@angular/core';
import {connectHits } from 'instantsearch.js/es/connectors';

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
  // Define how your component state will look like,
  // and intialize it with an empty hits array
  state: { hits: {}[] } = { hits: [] };

  constructor(private instantsearchService: InstantsearchService) {}

  ngOnInit() {
    // Create a widget which will call `this.updateState` whenever
    // something changes on the search state itself
    const widget = connectHits(this.updateState);

    // Register the Hits widget into the instantSearchService search instance.
    this.instantsearchService.search.addWidget(widget());
  }

  updateState = (state, isFirstRendering) => {
    // asynchronous update of the state
    // avoid `ExpressionChangedAfterItHasBeenCheckedError`
    if (isFirstRendering) {
      return Promise.resolve().then(() => {
        this.state = state;
      });
    }

    this.state = state;
  }
}

import { Component, OnInit } from '@angular/core';
import { connectSearchBox } from 'instantsearch.js/es/connectors';

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
  // Define SearchBox initial state
  state: { query: string; refine: Function } = {
    query: '',
    refine() {}
  };

  constructor(private instantsearchService: InstantsearchService) {}

  ngOnInit() {
    const widget = connectSearchBox(this.updateState);
    this.instantsearchService.search.addWidget(widget());
  }

  updateState = (state, isFirstRendering) => {
    // asynchronous update of the state
    // avoid `ExpressionChangedAfterItHasBeenCheckedError`
    if (isFirstRendering) {
      return Promise.resolve(null).then(() => {
        this.state = state;
      });
    }

    this.state = state;
  }
}

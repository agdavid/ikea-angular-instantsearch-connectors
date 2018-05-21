import { Component, OnInit } from '@angular/core';
import { connectRefinementList } from 'instantsearch.js/es/connectors';

import { InstantsearchService } from '../../services/instantsearch.service';

@Component({
  selector: 'app-refinement-list',
  template: `
    <p>
      refinement-list Works!
    </p>
  `,
  styles: []
})
export class RefinementListComponent implements OnInit {

  constructor(private instantsearchService: InstantsearchService) { }

  ngOnInit() {
    // Create a widget which will call 'this.updateState' whenever
    // something changes on the search state itself
    const widget = connectRefinementList(this.updateState);

    // Register the RefinementList widget into the instantsearchService search instance
    this.instantsearchService.search.addWidget(widget({
      attributeName: 'categories.lvl0'
    }));
  }

  updateState = () => {

  }

}

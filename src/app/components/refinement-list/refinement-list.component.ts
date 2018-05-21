import { Component, OnInit } from '@angular/core';
import { connectRefinementList } from 'instantsearch.js/es/connectors';

import { InstantsearchService } from '../../services/instantsearch.service';

@Component({
  selector: 'app-refinement-list',
  template: `
    <div>
      <label
        *ngFor="let item of (state.items ? state.items : [])"
        (click)="handleChange($event.target.value)"
      >
        <input
          type="checkbox"
          [value]="item.value"
          [checked]="item.isRefined"
        />
        <span>{{ item.value }}</span>
      </label>
    </div>
  `,
  styles: []
})
export class RefinementListComponent implements OnInit {
  // Define RefinementList initial state
  state: { query: string; refine: Function } = {
    query: '',
    refine() {}
  }

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

  handleChange = (query) => {
    this.state.refine(query);
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

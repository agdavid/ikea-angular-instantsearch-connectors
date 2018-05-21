import { Injectable } from '@angular/core';
import instantsearch from 'instantsearch.js/es';

@Injectable()
export class InstantsearchService {

  search = instantsearch({
    appId: 'ZSL0RJTCOE',
    apiKey: '3f46604e5ceef1479ae2ca58ae4f0a71',
    indexName: 'ikea',
    urlSync: true
  });

  constructor() { }

}

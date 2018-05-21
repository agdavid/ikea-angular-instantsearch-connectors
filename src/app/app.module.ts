import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { InstantsearchService } from './services/instantsearch.service';
import { AppComponent } from './app.component';
import { HitsComponent } from './components/hits/hits.component';
import { SearchBoxComponent } from './components/search-box/search-box.component';
import { RefinementListComponent } from './components/refinement-list/refinement-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HitsComponent,
    SearchBoxComponent,
    RefinementListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    InstantsearchService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

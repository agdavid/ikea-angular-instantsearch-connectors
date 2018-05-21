import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { InstantsearchService } from './services/instantsearch.service';
import { AppComponent } from './app.component';
import { HitsComponent } from './components/hits/hits.component';
import { SearchBoxComponent } from './components/search-box/search-box.component';

@NgModule({
  declarations: [
    AppComponent,
    HitsComponent,
    SearchBoxComponent
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

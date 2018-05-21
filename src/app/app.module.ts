import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { InstantsearchService } from './services/instantsearch.service';
import { AppComponent } from './app.component';
import { HitsComponent } from './components/hits/hits.component';

@NgModule({
  declarations: [
    AppComponent,
    HitsComponent
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

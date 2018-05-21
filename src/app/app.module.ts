import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { InstantsearchService } from './services/instantsearch.service';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
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

import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {FormsModule} from "@angular/forms";
import { PercentagePipe } from './pipe/percentage.pipe';
import { StylingComponent } from './styling/styling.component';


@NgModule({
  declarations: [
    AppComponent,
    PercentagePipe,
    StylingComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [StylingComponent]
})
export class AppModule {
}

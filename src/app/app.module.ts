import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {FormsModule} from "@angular/forms";
import { PercentagePipe } from './pipe/percentage.pipe';
import { StylingComponent } from './styling/styling.component';
import { StructuralComponent } from './structural/structural.component';


@NgModule({
  declarations: [
    AppComponent,
    PercentagePipe,
    StylingComponent,
    StructuralComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [StructuralComponent]
})
export class AppModule {
}

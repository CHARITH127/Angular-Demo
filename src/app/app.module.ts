import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {FormsModule} from "@angular/forms";
import { PercentagePipe } from './pipe/percentage.pipe';
import { StylingComponent } from './styling/styling.component';
import { StructuralComponent } from './structural/structural.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';


@NgModule({
  declarations: [
    AppComponent,
    PercentagePipe,
    StylingComponent,
    StructuralComponent,
    ParentComponent,
    ChildComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [ParentComponent]
})
export class AppModule {
}

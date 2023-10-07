import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { ForecasttableComponent } from './forecasttable/forecasttable.component';
import {MatListModule} from "@angular/material/list";
import {MatLegacyMenuModule} from "@angular/material/legacy-menu";


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    ForecasttableComponent,
    MatListModule,
    MatLegacyMenuModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

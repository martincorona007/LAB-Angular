import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatListModule} from '@angular/material/list';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BottomSheetOverviewExampleComponent } from './bottom-sheet-overview-example/bottom-sheet-overview-example.component';
import { BottomSheetOverviewExampleSheetComponent } from './bottom-sheet-overview-example-sheet/bottom-sheet-overview-example-sheet.component';
import {MatBottomSheetModule} from '@angular/material/bottom-sheet';
@NgModule({
  declarations: [
    AppComponent,
    BottomSheetOverviewExampleComponent,
    BottomSheetOverviewExampleSheetComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
      MatBottomSheetModule,
      MatListModule,
      BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
}) 
export class AppModule { }

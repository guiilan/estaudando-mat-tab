import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatTabsModule} from '@angular/material/tabs';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FilhozeroComponent } from './filhozero/filhozero.component';
import { FilhoumComponent } from './filhoum/filhoum.component';

@NgModule({
  declarations: [
    AppComponent,
    FilhozeroComponent,
    FilhoumComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatTabsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

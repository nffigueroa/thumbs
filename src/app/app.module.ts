import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {OrganismsModule} from './organism/organisms.module';
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    OrganismsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
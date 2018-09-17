import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { Lib2Module } from '@gilluan/lib2';
import { Lib1Module } from '@gilluan/lib1';
import { Lib3Module } from '@gilluan/lib3';




@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    Lib2Module,
    Lib1Module,
    Lib3Module
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

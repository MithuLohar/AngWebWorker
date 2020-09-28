import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NvD3Module } from 'ng2-nvd3';
import 'd3';
import 'nvd3';
@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, NvD3Module, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

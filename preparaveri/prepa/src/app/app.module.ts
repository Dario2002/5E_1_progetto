import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'; //Importa Il modulo http
import { AppComponent } from './app.component';
import { AsanComponent } from './asan/asan.component';

@NgModule({
  declarations: [
    AppComponent,
    AsanComponent
  ],
  imports: [
    BrowserModule,HttpClientModule // aggiungo HttpclientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

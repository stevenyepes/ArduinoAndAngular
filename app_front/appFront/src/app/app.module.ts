import { EstacionService } from './estacion.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { EstacionComponent } from './estacion/estacion.component';


@NgModule({
  declarations: [
    AppComponent,
    EstacionComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,

  ],
  providers: [EstacionService],
  bootstrap: [AppComponent]
})
export class AppModule { }

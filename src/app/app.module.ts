import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { FahrenheitCelsiusPipe } from './fahrenheit-celsius.pipe';
import { CelsiusFahrenheitPipe } from './celsius-fahrenheit.pipe';

@NgModule({
  declarations: [
    AppComponent,
    FahrenheitCelsiusPipe,
    CelsiusFahrenheitPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

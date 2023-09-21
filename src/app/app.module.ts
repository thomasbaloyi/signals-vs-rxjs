import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RxjsComponent } from './components/rxjs/rxjs.component';
import { SignalsComponent } from './components/signals/signals.component';

@NgModule({
  declarations: [
    AppComponent,
    RxjsComponent,
    SignalsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { NavbarComponent } from './pages/homepage/navbar/navbar.component';
import { Footer2Component } from './shared/footer2/footer2.component';
import { app_routing } from './app.routes';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    NavbarComponent,
    Footer2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    app_routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

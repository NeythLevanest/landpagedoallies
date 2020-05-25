import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { NavbarComponent } from './pages/homepage/navbar/navbar.component';
import { Footer2Component } from './shared/footer2/footer2.component';
import { app_routing } from './app.routes';
import { EmprendedorpageComponent } from './pages/emprendedorpage/emprendedorpage.component';
import { InversionistapageComponent } from './pages/inversionistapage/inversionistapage.component';
import { Navbar2Component } from './shared/navbar2/navbar2.component';
import { LanzamientopageComponent } from './shared/lanzamientopage/lanzamientopage.component';


@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    NavbarComponent,
    Footer2Component,
    EmprendedorpageComponent,
    InversionistapageComponent,
    Navbar2Component,
    LanzamientopageComponent
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

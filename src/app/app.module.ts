import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { ContentRootComponent } from './components-principals/content-root/content-root.component'
import { HeaderComponent } from './components- externals/header/header.component';
import { FooterComponent } from './components- externals/footer/footer.component';
import { PopUp1Component } from './components-principals/pop-ups/pop-up1/pop-up1.component';
import { PopUp2Component } from './components-principals/pop-ups/pop-up2/pop-up2.component';
import { PopUp3Component } from './components-principals/pop-ups/pop-up3/pop-up3.component';
import { PopUp4Component } from './components-principals/pop-ups/pop-up4/pop-up4.component';
import { Problem1Component } from './components-principals/problems/problem1/problem1.component';
import { Problem2Component } from './components-principals/problems/problem2/problem2.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    Problem1Component,
    ContentRootComponent,
    PopUp1Component,
    PopUp2Component,
    PopUp3Component,
    PopUp4Component,
    Problem2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents:[PopUp1Component, PopUp4Component]
})
export class AppModule { }

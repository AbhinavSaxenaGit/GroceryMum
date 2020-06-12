import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LandingComponent } from './landing/landing.component';
import { BackgroundComponent } from './landing/background/background.component';
import { LoginPanelComponent } from './landing/login-panel/login-panel.component';
import { GlobalSearchComponent } from './global-search/global-search.component';
import { LocationPanelComponent } from './location-panel/location-panel.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    BackgroundComponent,
    LoginPanelComponent,
    GlobalSearchComponent,
    LocationPanelComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

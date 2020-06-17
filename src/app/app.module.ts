import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TopNavBarComponent } from './top-nav-bar/top-nav-bar.component';
import { BackgroundComponent } from './background/background.component';
import { LoginPanelComponent } from './top-nav-bar/login-panel/login-panel.component';
import { GlobalSearchComponent } from './top-nav-bar/global-search/global-search.component';
import { LocationPanelComponent } from './top-nav-bar/location-panel/location-panel.component';
import { CartComponent } from './top-nav-bar/cart/cart.component';
import { HomeComponent } from './top-nav-bar/home/home.component';
import { HamburgerComponent } from './top-nav-bar/hamburger/hamburger.component';
import { DetailsSliderComponent } from './details-slider/details-slider.component';

@NgModule({
  declarations: [
    AppComponent,
    TopNavBarComponent,
    BackgroundComponent,
    LoginPanelComponent,
    GlobalSearchComponent,
    LocationPanelComponent,
    CartComponent,
    HomeComponent,
    HamburgerComponent,
    DetailsSliderComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

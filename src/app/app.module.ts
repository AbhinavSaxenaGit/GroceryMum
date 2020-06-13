import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TopNavBarComponent } from './top-nav-bar/top-nav-bar.component';
import { BackgroundComponent } from './top-nav-bar/background/background.component';
import { LoginPanelComponent } from './top-nav-bar/login-panel/login-panel.component';
import { GlobalSearchComponent } from './top-nav-bar/global-search/global-search.component';
import { LocationPanelComponent } from './top-nav-bar/location-panel/location-panel.component';
import { CartComponent } from './top-nav-bar/cart/cart.component';

@NgModule({
  declarations: [
    AppComponent,
    TopNavBarComponent,
    BackgroundComponent,
    LoginPanelComponent,
    GlobalSearchComponent,
    LocationPanelComponent,
    CartComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

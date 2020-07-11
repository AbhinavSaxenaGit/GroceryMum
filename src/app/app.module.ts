import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { TopNavBarComponent } from './top-nav-bar/top-nav-bar.component';
import { BackgroundComponent } from './background/background.component';
import { LoginPanelComponent } from './top-nav-bar/login-panel/login-panel.component';
import { GlobalSearchComponent } from './top-nav-bar/global-search/global-search.component';
import { LocationPanelComponent } from './top-nav-bar/location-panel/location-panel.component';
import { CartComponent } from './top-nav-bar/cart/cart.component';
import { HomeComponent } from './top-nav-bar/home/home.component';
import { HamburgerComponent } from './top-nav-bar/hamburger/hamburger.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSelectModule} from '@angular/material/select';
import { MatTabsModule} from '@angular/material/tabs';
import { MatInputModule} from '@angular/material/input';
import { MatButtonModule} from '@angular/material/button';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { MatIconModule} from '@angular/material/icon';
import { PopularItemsComponent } from './popular-items/popular-items.component';
import { MatTreeModule } from '@angular/material/tree';
import { ToastrModule } from 'ngx-toastr';
import { ItemsGridComponent } from './items-grid/items-grid.component';
import { BottomBarComponent } from './bottom-bar/bottom-bar.component';

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
    PopularItemsComponent,
    ItemsGridComponent,
    BottomBarComponent,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatSelectModule,
    MatTabsModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatIconModule,
    MatButtonModule,
    MatTreeModule,
    ToastrModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

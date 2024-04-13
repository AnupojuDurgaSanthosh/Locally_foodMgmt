
// app.module.ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app.routing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';
import { HomeMenuComponent } from './theme/components/home-menu/home-menu.component';
import { FooterComponent } from './theme/components/footer/footer.component';
import { AboutUsComponent } from './theme/components/about-us/about-us.component';
import { MostPopularComponent } from './theme/components/most-popular/most-popular.component';
import { ChooseOurComponent } from './theme/components/choose-our/choose-our.component';
import { CustomerSayComponent } from './theme/components/customer-say/customer-say.component';
import { StarRatingComponent } from './utils/star-rating/star-rating.component';
import { LoginSigninComponent } from './theme/components/login-signin/login-signin.component';
import { SigninComponent } from './theme/components/signin/signin.component';
import { SidenavMenuComponent } from './theme/components/sidenav-menu/sidenav-menu.component';
import { AddRestaurentComponent } from './theme/components/add-restaurent/add-restaurent.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HomeMenuComponent,
    FooterComponent,
    AboutUsComponent,
    MostPopularComponent,
    ChooseOurComponent,
    CustomerSayComponent,
    StarRatingComponent,
    LoginSigninComponent,
    SigninComponent,
    SidenavMenuComponent,
    AddRestaurentComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule ,
    BrowserAnimationsModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

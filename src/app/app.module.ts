

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';




/*
Components
*/
  /*
    Static
  */
  import { AppComponent } from './app.component';
  import { HeaderComponent } from './header/header.component';
  import { FooterComponent } from './footer/footer.component';

  /*
    Home Component
  */
  import { HomeComponent } from './home/home.component';
  import { PhoneDownloadComponent } from './home/phone-download/phone-download.component';
  import { FeatureComponent } from './home/feature/feature.component';
  import { GoogleLinkComponent } from './home/google-link/google-link.component';
  import { GuideHelpComponent } from './home/guide-help/guide-help.component';
  import { TestimonyComponent } from './home/testimony/testimony.component';
  import { LocationComponent } from './home/location/location.component';
  import { BlogComponent } from './home/blog/blog.component';
  /*
    Investor Component
  */
  import { InvestorComponent } from './investor/investor.component';
  import { BursaComponent } from './investor/bursa/bursa.component';
  import { StockPriceComponent } from './investor/stock-price/stock-price.component';
  import { BusinessComponent } from './investor/business/business.component';
  import { InvestorInformationComponent } from './investor/investor-information/investor-information.component';
  import { NewsMediaComponent } from './investor/news-media/news-media.component';

/*
Services
*/
import { LocationService } from './services/location.service'

@NgModule({
  declarations: [
    /*
    Static
    */
    AppComponent,
    HeaderComponent,
    FooterComponent,

    /*
    Home
    */
    HomeComponent,
    PhoneDownloadComponent,
    FeatureComponent,
    GoogleLinkComponent,
    GuideHelpComponent,
    TestimonyComponent,
    LocationComponent,
    BlogComponent,

    /*
    Investor
    */
    InvestorComponent,
    BursaComponent,
    StockPriceComponent,
    BusinessComponent,
    InvestorInformationComponent,
    NewsMediaComponent,
    
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent },
      { path: 'investor', component: InvestorComponent }
    ]),
  ],
  providers: [
    LocationService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

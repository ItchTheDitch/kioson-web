/*
Module
*/

import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
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

  import { ReportComponent } from './investor/report/report.component';
  import { ResponsibilitiesComponent } from './investor/responsibilities/responsibilities.component';
  import { CollaborationComponent } from './investor/collaboration/collaboration.component';
  import { AboutComponent } from './investor/about/about.component';

  import { StockShareComponent } from './investor/stock-share/stock-share.component';
  import { NavbarInvestorComponent } from './investor/navbar-investor/navbar-investor.component';

  /*
    Home Component en
  */
  import { HomeComponent2 } from './home2/home2.component';
  import { PhoneDownloadComponent2 } from './home2/phone-download/phone-download2.component';
  import { FeatureComponent2 } from './home2/feature/feature2.component';
  import { GoogleLinkComponent2 } from './home2/google-link/google-link2.component';
  import { GuideHelpComponent2 } from './home2/guide-help/guide-help2.component';
  import { TestimonyComponent2 } from './home2/testimony/testimony2.component';
  import { LocationComponent2 } from './home2/location/location2.component';
  import { BlogComponent2 } from './home2/blog/blog2.component';
  /*
    Investor Component
  */
  import { InvestorComponent2 } from './investor2/investor2.component';
  import { BursaComponent2 } from './investor2/bursa/bursa2.component';
  import { StockPriceComponent2 } from './investor2/stock-price/stock-price2.component';
  import { BusinessComponent2 } from './investor2/business/business2.component';
  import { InvestorInformationComponent2 } from './investor2/investor-information/investor-information2.component';
  import { NewsMediaComponent2 } from './investor2/news-media/news-media2.component';

  import { ReportComponent2 } from './investor2/report/report2.component';
  import { ResponsibilitiesComponent2 } from './investor2/responsibilities/responsibilities2.component';
  import { CollaborationComponent2 } from './investor2/collaboration/collaboration2.component';
  import { AboutComponent2 } from './investor2/about/about2.component';

  import { StockShareComponent2 } from './investor2/stock-share/stock-share2.component';
  import { NavbarInvestorComponent2 } from './investor2/navbar-investor/navbar-investor2.component';

/*
Services
*/
  import { LocationService } from './services/location.service'
  import { ValidatorService } from './services/validator.service';
  import { InvestorPageComponent } from './investor/investor-page/investor-page.component';
  import { MetadataService } from './services/metadata.service';
  

  

import { Report2015Component } from './investor/report2015/report2015.component';
import { Report2016Component } from './investor/report2016/report2016.component';
import { Report2017Component } from './investor/report2017/report2017.component';
import { SahamComponent } from './investor/saham/saham.component';
import { MediaComponent } from './media/media.component';
import { PemegangSahamComponent } from './investor/pemegang-saham/pemegang-saham.component';
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
    ReportComponent,
    ResponsibilitiesComponent,
    CollaborationComponent,
    AboutComponent,
    StockShareComponent,
    NavbarInvestorComponent,
    InvestorPageComponent,
    Report2015Component,
    Report2016Component,
    Report2017Component,
    SahamComponent,
    MediaComponent,
    PemegangSahamComponent,

    /*
    Home - en 
    */
    HomeComponent2,
    PhoneDownloadComponent2,
    FeatureComponent2,
    GoogleLinkComponent2,
    GuideHelpComponent2,
    TestimonyComponent2,
    LocationComponent2,
    BlogComponent2,

    /*
    Investor - en
    */
    InvestorComponent2,
    BursaComponent2,
    StockPriceComponent2,
    BusinessComponent2,
    InvestorInformationComponent2,
    NewsMediaComponent2,
    ReportComponent2,
    ResponsibilitiesComponent2,
    CollaborationComponent2,
    AboutComponent2,
    StockShareComponent2,
    NavbarInvestorComponent2,
    
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent },
      { path: 'investor', component: InvestorComponent },
      { path: 'financial2015', component: Report2015Component },
      { path: 'financial2016', component: Report2016Component },
      { path: 'financial2017', component: Report2017Component },
      { path: 'saham', component: SahamComponent },
      { path: 'pemegangsaham', component: PemegangSahamComponent },
      { path: 'investor/financial-statement', component: ReportComponent },
      { path: 'investor/stock-share', component: StockShareComponent },

      /*
      En Route Path
      */

      { path: 'en/investor', component: InvestorComponent2 },
      { path: 'en', component: HomeComponent2 },
    ]),
    HttpModule,
  ],
  providers: [
    LocationService,
    ValidatorService,
    MetadataService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

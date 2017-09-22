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
Services
*/
import { LocationService } from './services/location.service'
import { ValidatorService } from './services/validator.service';
import { Report2015Component } from './investor/report2015/report2015.component';
import { Report2016Component } from './investor/report2016/report2016.component';
import { Report2017Component } from './investor/report2017/report2017.component';
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
    Report2015Component,
    Report2016Component,
    Report2017Component,
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent },
      { path: 'investor', component: InvestorComponent },
      { path: 'investor/financial2015', component: Report2015Component },
      { path: 'investor/financial2016', component: Report2016Component },
      { path: 'investor/financial2017', component: Report2017Component },
      { path: 'investor/financial-statement', component: ReportComponent },
      { path: 'investor/stock-share', component: StockShareComponent },
    ]),
  ],
  providers: [
    LocationService,ValidatorService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

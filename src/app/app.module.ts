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

  // parent
  import { IndexEnComponent } from './index-en/index-en.component';
  import { IndexIdComponent } from './index-id/index-id.component';
  import { AppComponent } from './app.component';

  // ID
  import { HeaderComponent } from './index-id/header/header.component';
  import { FooterComponent } from './index-id/footer/footer.component';
  import { KarirComponent } from './index-id/karir/karir.component';
  import { HomeComponent } from './index-id/home/home.component';
  /*
    Home Component
  */
  
  import { GuideHelpComponent } from './index-id/home/guide-help/guide-help.component';
  import { TestimonyComponent } from './index-id/home/testimony/testimony.component';
  import { LocationComponent } from './index-id/home/location/location.component';
  import { BlogComponent } from './index-id/home/blog/blog.component';
  import { MediaComponent } from './index-id/home/media/media.component';
  /*
    Investor Component
  */
  import { InvestorComponent } from './index-id/investor/investor.component';
  import { BursaComponent } from './index-id/investor/bursa/bursa.component';
  import { StockPriceComponent } from './index-id/investor/stock-price/stock-price.component';
  import { BusinessComponent } from './index-id/investor/business/business.component';
  import { InvestorInformationComponent } from './index-id/investor/investor-information/investor-information.component';
  import { InvestorPageComponent } from './index-id/investor/investor-page/investor-page.component';
  import { NewsMediaComponent } from './index-id/investor/news-media/news-media.component';
  import { ReportComponent } from './index-id/investor/report/report.component';
  import { ResponsibilitiesComponent } from './index-id/investor/responsibilities/responsibilities.component';
  import { CollaborationComponent } from './index-id/investor/collaboration/collaboration.component';
  import { AboutComponent } from './index-id/investor/about/about.component';

  import { StockShareComponent } from './index-id/investor/stock-share/stock-share.component';
  import { NavbarInvestorComponent } from './index-id/investor/navbar-investor/navbar-investor.component';
  
  import { Report2015Component } from './index-id/investor/report2015/report2015.component';
  import { Report2016Component } from './index-id/investor/report2016/report2016.component';
  import { Report2017Component } from './index-id/investor/report2017/report2017.component';
  import { SahamComponent } from './index-id/investor/saham/saham.component';
  
  import { PemegangSahamComponent } from './index-id/investor/pemegang-saham/pemegang-saham.component';
  import { LembagaPenunjangComponent } from './index-id/investor/lembaga-penunjang/lembaga-penunjang.component';
  import { DewanKomisarisComponent } from './index-id/investor/dewan-komisaris/dewan-komisaris.component';
  import { DewanDireksiComponent } from './index-id/investor/dewan-direksi/dewan-direksi.component';
  import { SekretarisPerusahaanComponent } from './index-id/investor/sekretaris-perusahaan/sekretaris-perusahaan.component';

  

  // #########################################################################

  // EN
  import { HeaderComponent2 } from './index-en/header/header.component';
  import { FooterComponent2 } from './index-en/footer/footer.component';
  import { KarirComponent2 } from './index-en/karir/karir.component';
  import { HomeComponent2 } from './index-en/home/home.component';
  /*
    Home Component
  */

  import { GuideHelpComponent2 } from './index-en/home/guide-help/guide-help.component';
  import { TestimonyComponent2 } from './index-en/home/testimony/testimony.component';
  import { LocationComponent2 } from './index-en/home/location/location.component';
  import { BlogComponent2 } from './index-en/home/blog/blog.component';
  import { MediaComponent2 } from './index-en/home/media/media.component';
  /*
    Investor Component
  */
  import { InvestorComponent2 } from './index-en/investor/investor.component';
  import { BursaComponent2 } from './index-en/investor/bursa/bursa.component';
  import { StockPriceComponent2 } from './index-en/investor/stock-price/stock-price.component';
  import { BusinessComponent2 } from './index-en/investor/business/business.component';
  import { InvestorPageComponent2 } from './index-en/investor/investor-page/investor-page.component';
  import { InvestorInformationComponent2 } from './index-en/investor/investor-information/investor-information.component';

  import { NewsMediaComponent2 } from './index-en/investor/news-media/news-media.component';
  import { ReportComponent2 } from './index-en/investor/report/report.component';
  import { ResponsibilitiesComponent2 } from './index-en/investor/responsibilities/responsibilities.component';
  import { CollaborationComponent2 } from './index-en/investor/collaboration/collaboration.component';
  import { AboutComponent2 } from './index-en/investor/about/about.component';

  import { StockShareComponent2 } from './index-en/investor/stock-share/stock-share.component';
  import { NavbarInvestorComponent2 } from './index-en/investor/navbar-investor/navbar-investor.component';

  import { Report2015Component2 } from './index-en/investor/report2015/report2015.component';
  import { Report2016Component2 } from './index-en/investor/report2016/report2016.component';
  import { Report2017Component2 } from './index-en/investor/report2017/report2017.component';
  import { SahamComponent2 } from './index-en/investor/saham/saham.component';

  import { PemegangSahamComponent2 } from './index-en/investor/pemegang-saham/pemegang-saham.component';
  import { LembagaPenunjangComponent2 } from './index-en/investor/lembaga-penunjang/lembaga-penunjang.component';
  import { DewanKomisarisComponent2 } from './index-en/investor/dewan-komisaris/dewan-komisaris.component';
  import { DewanDireksiComponent2 } from './index-en/investor/dewan-direksi/dewan-direksi.component';
  import { SekretarisPerusahaanComponent2 } from './index-en/investor/sekretaris-perusahaan/sekretaris-perusahaan.component';



/*
Services
*/
  import { LocationService } from './services/location.service'
  import { ValidatorService } from './services/validator.service';
  

  

  


@NgModule({
  declarations: [
    /*
    Static
    */
    IndexIdComponent,
    IndexEnComponent,
    AppComponent,
    HeaderComponent,
    FooterComponent,
    KarirComponent,
    

    /*
    Home
    */
    HomeComponent,
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
    LembagaPenunjangComponent,
    DewanKomisarisComponent,
    DewanDireksiComponent,
    SekretarisPerusahaanComponent,

    /*
    Home - en 
    */
/*
    Static
    */
    HeaderComponent2,
    FooterComponent2,
    KarirComponent2,

    /*
    Home
    */
    HomeComponent2,
    GuideHelpComponent2,
    TestimonyComponent2,
    LocationComponent2,
    BlogComponent2,

    /*
    Investor
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
    InvestorPageComponent2,
    Report2015Component2,
    Report2016Component2,
    Report2017Component2,
    SahamComponent2,
    MediaComponent2,
    PemegangSahamComponent2,
    LembagaPenunjangComponent2,
    DewanKomisarisComponent2,
    DewanDireksiComponent2,
    SekretarisPerusahaanComponent2,
    
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      { path: '', 
      component: IndexIdComponent,
      data: { title: 'Home' },
      children:[
        { path: '', component: HomeComponent },
        { path: 'karir', component: KarirComponent },
        { path: 'investor', 
          component: InvestorComponent,
          children:[
            { path: '', component: InvestorPageComponent },
            { path: 'saham', component: SahamComponent },
            { path: 'pemegangsaham', component: PemegangSahamComponent },
            { path: 'lembagapenunjang', component: LembagaPenunjangComponent },
            { path: 'dewankomisaris', component: DewanKomisarisComponent },
            { path: 'dewandireksi', component: DewanDireksiComponent },
            { path: 'sekretarisperusahaan', component: SekretarisPerusahaanComponent },
            { path: 'about', component: AboutComponent },//
            { path: 'financial-statement', component: ReportComponent },
            { path: 'stock-share', component: StockShareComponent },
            { path: 'financial2015', component: Report2015Component },
            { path: 'financial2016', component: Report2016Component },
            { path: 'financial2017', component: Report2017Component },
          ] 
        },
       ] 
      },

     
      

      /*
      En Route Path
      */
      { path: 'en', 
      component: IndexEnComponent,
      children:[
        { path: '', component: HomeComponent2 },
        { path: 'karir', component: KarirComponent2 },
        { path: 'investor', 
          component: InvestorComponent2,
          children:[
            { path: '', component: InvestorPageComponent2 },
            { path: 'saham', component: SahamComponent2 },
            { path: 'pemegangsaham', component: PemegangSahamComponent2 },
            { path: 'lembagapenunjang', component: LembagaPenunjangComponent2 },
            { path: 'dewankomisaris', component: DewanKomisarisComponent2 },
            { path: 'dewandireksi', component: DewanDireksiComponent2 },
            { path: 'sekretarisperusahaan', component: SekretarisPerusahaanComponent2 },
            { path: 'about', component: AboutComponent2 },//
            { path: 'financial-statement', component: ReportComponent2 },
            { path: 'stock-share', component: StockShareComponent2 },
            { path: 'financial2015', component: Report2015Component2 },
            { path: 'financial2016', component: Report2016Component2 },
            { path: 'financial2017', component: Report2017Component2 },
          ] 
        },
       ] 
      },



      // { path: 'en/investor', component: InvestorComponent2 },
      // { path: 'en', component: IndexEnComponent },
    ]),
    HttpModule,
  ],
  providers: [
    LocationService,
    ValidatorService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions} from '@angular/http';
import { Observable } from 'rxjs/Rx';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch'; 

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css']
})
export class LocationComponent implements OnInit {

  propinsi ="";
  kota = "";
  kecamatan = "";
  kelurahan = "";

  visible = 0;
  butDisabled1:boolean = true;
  butDisabled2:boolean = true;
  butDisabled3:boolean = true;

  propinsis: object[] = [
                         ["","Pilih..."],["BALI","BALI"],["BANGKA BELITUNG","BANGKA BELITUNG"],["BANTEN","BANTEN"],
                         ["BENGKULU","BENGKULU"],["DI YOGYAKARTA","DI YOGYAKARTA"],["DKI JAKARTA","DKI JAKARTA"],
                         ["GORONTALO","GORONTALO"],["JAMBI","JAMBI",],["JAWA BARAT","JAWA BARAT"],["JAWA TENGAH","JAWA TENGAH"],
                         ["JAWA TIMUR","JAWA TIMUR"],["KALIMANTAN BARAT","KALIMANTAN BARAT"],["KALIMANTAN SELATAN","KALIMANTAN SELATAN"],
                         ["KALIMANTAN TENGAH","KALIMANTAN TENGAH"],["KALIMANTAN TIMUR","KALIMANTAN TIMUR"],["KALIMANTAN UTARA","KALIMANTAN UTARA"],
                         ["KEPULAUAN RIAU","KEPULAUAN RIAU"],["LAMPUNG","LAMPUNG"],["MALUKU","MALUKU"],["MALUKU UTARA","MALUKU UTARA"],
                         ["NANGGROE ACEH DARUSSALAM (NAD)","NANGGROE ACEH DARUSSALAM (NAD)"],["NUSA TENGGARA BARAT (NTB)","NUSA TENGGARA BARAT (NTB)"],
                         ["NUSA TENGGARA TIMUR (NTT)","NUSA TENGGARA TIMUR (NTT)"],["NUSA TENGGARA TIMUR (NTT)","NUSA TENGGARA TIMUR (NTT)"],
                         ["PAPUA","PAPUA"],["PAPUA BARAT","PAPUA BARAT"],["RIAU","RIAU"],["SULAWESI BARAT","SULAWESI BARAT"],
                         ["SULAWESI SELATAN","SULAWESI SELATAN"],["SULAWESI TENGAH","SULAWESI TENGAH"],["SULAWESI UTARA","SULAWESI UTARA"],
                         ["SUMATERA BARAT","SUMATERA BARAT"],["SUMATERA SELATAN","SUMATERA SELATAN"],["SUMATERA UTARA","SUMATERA UTARA"],
                        ];
  kotas: object[];
  kecamatans: object[];
  kelurahans: object[];
  kios: object[];
  
  constructor(private http:Http) { 
    
  }

  ngOnInit() {
    
  }

  getDataKota(){

    let body = JSON.stringify({'propinsi': this.propinsi}); 
    let headers = new Headers({ "Content-Type" : "application/json" });
    let options = new RequestOptions({ headers : headers });

    return this.http.post('https://api.davidtobing.com/api/kioson/kota', body, options)
    .map(result => result.json())
    .subscribe(result => {
                            this.butDisabled1 = false;
                            this.butDisabled2 = false;
                            this.butDisabled3 = false;
                            this.kotas = result;
                            this.kota = "";
                            this.kelurahan = "";
                            this.kecamatan = "";
                            this.getDataKecamatan();
                            this.getDataKelurahan();
                            this.check();
                          }
    );   
  }

  getDataKecamatan(){

    let body = JSON.stringify({'propinsi': this.propinsi, 'kota': this.kota}); 
    let headers = new Headers({ "Content-Type" : "application/json" });
    let options = new RequestOptions({ headers : headers });

    return this.http.post('https://api.davidtobing.com/api/kioson/kecamatan', body, options)
    .map(result => result.json())
    .subscribe(result => {
                            this.kecamatans = result;
                            this.kelurahan = "";
                            this.kecamatan = "";
                            this.getDataKelurahan();
                            this.check();
                          }
    );  
  }

  getDataKelurahan(){
   
    let body = JSON.stringify({'propinsi': this.propinsi, 'kota': this.kota, 'kecamatan': this.kecamatan}); 
    let headers = new Headers({ "Content-Type" : "application/json" });
    let options = new RequestOptions({ headers : headers });

    return this.http.post('https://api.davidtobing.com/api/kioson/kelurahan', body, options)
    .map(result => result.json())
    .subscribe(result => {
                            this.kelurahan = "";
                            this.kelurahans = result;
                            this.check();
                          }
    );
  }

  getDataKios(){
    
     let body = JSON.stringify({'propinsi': this.propinsi, 'kota': this.kota, 'kecamatan': this.kecamatan,  'kelurahan': this.kelurahan}); 
     let headers = new Headers({ "Content-Type" : "application/json" });
     let options = new RequestOptions({ headers : headers });
 
     return this.http.post('https://api.davidtobing.com/api/kioson/kios', body, options)
     .map(result => result.json())
     .subscribe(result => {
                            this.kios = result;
                            this.check();
                          }
    );
   }

  check(){
      if(this.kios.length > 0){
        this.visible = 1;
       }else{
        this.visible = 0;
      }

      if(this.propinsi == ""){
        this.butDisabled1 = true;
        this.butDisabled2 = true;
        this.butDisabled3 = true;

        this.kota = "";
        this.kelurahan = "";
        this.kecamatan = "";

        this.kotas = [["","---"]];
        this.kelurahans = [["","---"]];
        this.kecamatans = [["","---"]];
      }
   }
}

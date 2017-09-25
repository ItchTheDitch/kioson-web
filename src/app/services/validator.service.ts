import { Injectable } from '@angular/core';

@Injectable()
export class ValidatorService {

  constructor() { }

  noPonsel = '';
  ponselLength: number;
  hpIsInvalid = false;
  hpTelahDikirim = false;
  
  validateHP () {
    
    const reg = /^\d+$/;
    if (reg.test(this.noPonsel) && this.noPonsel.length > 9 && this.noPonsel.length < 13) {
      
      this.hpIsInvalid = false;
      this.hpTelahDikirim = true;
      this.noPonsel="";

    }
    else{
      
      this.hpIsInvalid = true;
      this.hpTelahDikirim = false;
    }

  }

  email = '';
  nama = '';
  namaSalah = false;
  namaIsNull = true;
  emailDikirim = false;
  emailBelumBenar = true;
  emailSalah = false;
  emailValid = false;
  validateEmail () {
    const reg =  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (reg.test(this.email)) {
      
      this.emailValid = true;
      this.emailBelumBenar=false;
      this.emailSalah=false;
    }
    else{
      console.log('Tolong input data dengan benar');
      this.emailSalah = true;
      this.emailValid = false;
    }
  }
  
  langgananEmail () {
    const reg =  /^[a-zA-Z]*$/;
    if (reg.test(this.nama)) {
      
      console.log("langganan email !");
      this.emailDikirim=true;
      this.namaSalah=false;
      this.emailValid = false;
    }
    else{
      this.namaSalah=true;
    }
    
  }
}

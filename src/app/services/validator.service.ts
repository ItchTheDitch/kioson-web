import { Injectable } from '@angular/core';

import { Http, Headers, RequestOptions} from '@angular/http';
import { Observable } from 'rxjs/Rx';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch'; 

@Injectable()
export class ValidatorService {

  constructor(private http:Http) { }

  noPonsel = '';
  hpIsInvalid = false;
  hpTelahDikirim = false;
  validateHP () {
    
    const reg = /^08[0-9]{8,11}$/;
    if (reg.test(this.noPonsel)) {
      
      let data = {
        "phone_number": this.noPonsel,
      };
      let body = JSON.stringify(data);
      let headers = new Headers ({ 
        "Content-Type":"application/json"
      });
      
      let options = new RequestOptions({ headers : headers});
  
      
      
      this.hpIsInvalid = false;
      this.hpTelahDikirim = true;
      this.noPonsel="";
      this.http.post('http://localhost:8000/api/addPhone', body, options)
      .subscribe(res=> console.log(res.json()));

    }
    else{
      
      this.hpIsInvalid = true;
      this.hpTelahDikirim = false;
    }

  }

  email = '';
  nama = '';
  namaSalah = false;
  namaBelumSalah = true;
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

      let data = {
        "name": this.nama,
        "email": this.email,
      };
      let body = JSON.stringify(data);
      let headers = new Headers ({ 
        "Content-Type":"application/json"
      });
      let options = new RequestOptions({ headers : headers});
      this.http.post('http://localhost:8000/api/addEmail', body, options)
      .subscribe(res=> console.log(res.json()));
    }
    else{
      console.log('Tolong input data dengan benar');
      this.emailSalah = true;
      this.emailValid = false;
    }

  }
  
  langgananEmail () {
    const reg = /^[a-zA-Z]([a-zA-Z ,.]*)$/;
    // /^[a-zA-Z]*$/;
    if (reg.test(this.nama)) {
      
      console.log("langganan email !");
      this.emailDikirim=true;
      this.namaSalah=false;
      this.emailValid = false;

      //kirimKeEmailDB () => dari validator.service
      let data = {
        "name": this.nama,
        "email": this.email,
      };
      let body = JSON.stringify(data);
      let headers = new Headers ({ 
        "Content-Type":"application/json"
      });
      
      let options = new RequestOptions({ headers : headers});
  
      return this.http.post('http://localhost:8000/api/addEmail', body, options)
      .map(result=> result.json());
    }
    else{
      this.namaSalah=true;
      this.namaBelumSalah=false;
    }
    
  }

  

}

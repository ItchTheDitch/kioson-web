import { Component, OnInit } from '@angular/core';
// service
import { ValidatorService } from '../../services/validator.service';

import { Http, Headers, RequestOptions} from '@angular/http';
import { Observable } from 'rxjs/Rx';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch'; 

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor(private validatorservice:ValidatorService, private http:Http) { }

  ngOnInit() {
  }

  validate(){
    this.validatorservice.validateEmail();

  }
  langgananEmail(){
    this.validatorservice.langgananEmail();

  }


  //udah pindah ke validator.service
  // kirimKeEmailDB (){
    
  //    let data = {
  //      "name": this.validatorservice.nama,
  //      "email": this.validatorservice.email,
  //    };
  //    let body = JSON.stringify(data);
  //    let headers = new Headers ({ 
  //      "Content-Type":"application/json"
  //    });
     
  //    let options = new RequestOptions({ headers : headers});
 
  //    return this.http.post('http://localhost:8000/api/addEmail', body, options)
  //    .map(result=> result.json());
      
  //  }

}

import { Injectable } from '@angular/core';

@Injectable()
export class ValidatorService {

  constructor() { }

  noPonsel:string="";
  ponselLength:number;
  isInvalid:boolean=false; 
  telahDikirim:boolean=false; 
  validate(){
    // console.log(this.noPonsel);
    var reg = /^\d+$/; 
    
    if(reg.test(this.noPonsel)&& this.noPonsel.length>9 && this.noPonsel.length<13){
      console.log(this.noPonsel);
      this.isInvalid=false;
      this.telahDikirim=true;
      
    }
    else{
      console.log("Tolong input data dengan benar");
      this.isInvalid=true;
      this.telahDikirim=false;
    }

  }
}

import { Component, OnInit } from '@angular/core';


// service
import { ValidatorService } from '../services/validator.service';

@Component({
  selector: 'app-home-2',
  templateUrl: './home2.component.html',
  styleUrls: ['./home2.component.css']
})
export class HomeComponent2 implements OnInit {

  constructor(private validatorservice:ValidatorService) { }

  
  ngOnInit() {
    
  }

  validate(){
    this.validatorservice.validate();

  }
}

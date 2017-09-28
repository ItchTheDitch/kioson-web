import { Component, OnInit } from '@angular/core';


// service
import { ValidatorService } from '../../services/validator.service';

@Component({
  selector: 'app-home2',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent2 implements OnInit {

  constructor(private validatorservice:ValidatorService) { }

  
  ngOnInit() {
    
  }

  validate(){
    this.validatorservice.validateHP();
  }
}

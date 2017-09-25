import { Component, OnInit } from '@angular/core';
// service
import { ValidatorService } from '../services/validator.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor(private validatorservice:ValidatorService) { }

  ngOnInit() {
  }

  validate(){
    this.validatorservice.validateEmail();

  }
  langgananEmail(){
    this.validatorservice.langgananEmail();

  }

}

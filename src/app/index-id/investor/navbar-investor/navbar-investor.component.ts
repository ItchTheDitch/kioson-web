import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar-investor',
  templateUrl: './navbar-investor.component.html',
  styleUrls: ['./navbar-investor.component.css']
})
export class NavbarInvestorComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  navigateTo(location: string): void {
    // location will be a valid CSS ID selector; i.e. it should be preceded with '#'
    window.location.hash = location;
    setTimeout(() => {
        document.querySelector(location).parentElement.scrollIntoView();
      });
    }
}

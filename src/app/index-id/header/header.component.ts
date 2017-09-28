import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

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

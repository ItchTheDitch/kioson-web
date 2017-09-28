import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  // navigateTo(location: string): void {
  //   // location will be a valid CSS ID selector; i.e. it should be preceded with '#'
  //   window.location.hash = location;
  //   setTimeout(() => {
  //       document.querySelector(location).parentElement.scrollIntoView();
  //     });
  //   }
}

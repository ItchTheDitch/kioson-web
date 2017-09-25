import { Component, OnInit } from '@angular/core';
import { MetadataService } from '../services/metadata.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private data:MetadataService) { }

  ngOnInit() {
  }

}

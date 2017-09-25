import { Injectable } from '@angular/core';

@Injectable()
export class MetadataService {

  visible1:boolean = true;
  visible2:boolean = false;

  constructor() { }

  change1(){
    this.visible1 = false;
    this.visible2 = true;
  }

  change2(){
    this.visible1 = true;
    this.visible2 = false;
  }

}

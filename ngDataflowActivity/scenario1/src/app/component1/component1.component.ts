import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-component1',
  templateUrl: './component1.component.html',
  styleUrls: ['./component1.component.css']
})
export class Component1Component implements OnInit {
  public myInput= null;
  public printText(value)
  {
   // this.myInput = value.value;
    console.log(value, this.myInput);
  }
  constructor() { }

  ngOnInit() {
  }

}

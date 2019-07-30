import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { EmitterVisitorContext } from '@angular/compiler';

@Component({
  selector: 'app-component2',
  templateUrl: './component2.component.html',
  styleUrls: ['./component2.component.css']
})
export class Component2Component implements OnInit {

  @Output()   public child = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  myFunction(val) {
    console.log(val);
    this.child.emit(val);
  }
}

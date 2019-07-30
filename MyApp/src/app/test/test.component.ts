import { Component, OnInit } from '@angular/core';
import { ArgumentOutOfRangeError } from 'rxjs';

@Component({
  selector: 'app-test',
  // templateUrl: './test.component.html',
  template:`<h2> <input type="text" [disabled]=false> Hello and welcome to one and all!!</h2>
  <h2 [ngClass]="messages">this is coming from messages object</h2>
  <h2 [style.color]=" decide? 'blue' : 'orange'">My orange </h2>
  <input #id [(ngModel)]="name" type="text">
  <button (click)="logMessage(id.value)">save</button>
  {{name}}
  {{value}}
  <button (click)="onClick()">click me for nonsense</button>
  {{text}}
  `,
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  public text= "";
  public name= "";
  public decide=false;
  public isSpecial=true;
  public hasError=false;
  public messages =
            {
          "successful": !this.hasError,
          "failed": this.hasError,
          "italicstyle": this.isSpecial  
            }
            public onClick()
            {
              this.text= "You might as well close this";
            }
            public logMessage(value)
            {
              console.log(value);
            }

  constructor() { }


  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `
  <h2 *ngIf="display; else elseDisplay">
  my random ngIf text
  </h2>
  <ng-template #elseDisplay>
  <h2>
  alternate ngIf text
  </h2>
  </ng-template>
  `,
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  public display=true;
  constructor() { }

  ngOnInit() {
  }

}

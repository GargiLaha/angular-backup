import { Component, OnInit } from '@angular/core';
import { EmployeeServiceService } from '../employee-service.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

 public employees = [];
 public errorMsg;

 constructor(private _employeeServiceService : EmployeeServiceService)   {  }

  ngOnInit() {
  this._employeeServiceService.getEmployees().subscribe(data => this.employees= data,
    error=>this.errorMsg=error);
  }

}

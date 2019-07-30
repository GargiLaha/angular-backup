import { Component, OnInit } from '@angular/core';
import { EmployeeServiceService } from '../employee-service.service';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {
  public employees = [];
  public errorMsg;
  
  
  constructor(private _employeeServiceService:EmployeeServiceService ) { }

  ngOnInit() {
   this._employeeServiceService.getEmployees().subscribe(
     data =>  this.employees= data,
     error=>this.errorMsg=error);
  }

}

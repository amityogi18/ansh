import { Component, OnInit } from '@angular/core';
import { UtilityService } from '../utility.service';
import * as _ from 'lodash';
import { Employee } from './../domain/employee';
import {Router} from '@angular/router';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {

  employeeList : Employee[];
  searchName ='';
  fieldName = '';
 
  constructor(private utilityService : UtilityService, public router: Router) { 
    
  }

  ngOnInit() {
    this.showEmployeeData();
  }

  isNotNumber(param) {
    return _.isString(param)
  }

  setLocalStorage(param) {
    if (param){
      localStorage.setItem('employeeDetails', JSON.stringify(param));
    }
  }

  showEmployeeData() {
    this.utilityService.getEmployeeDetails().subscribe(
      data => this.processData(data),
      error => this.handleError(error)
    );
  }

  processData(data) {
    if (_.isEmpty(localStorage.getItem('employeeDetails'))) {
      this.setLocalStorage(data.data);
    }
    this.employeeList = JSON.parse(localStorage.getItem('employeeDetails'));
  }

  handleError(error) {
    console.log(error);
  }

  addEmployee(){
    debugger;
    this.router.navigate(['/employee/add']);
  }

   
}

import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-details',
  standalone: true,
  imports: [NgFor],
  template: `
      <h2>Employee details-list</h2>
    <ul *ngFor="let emp of employees">
      <li>{{emp.id}}.{{emp.name}} - {{emp.exp}}</li>
    </ul>
  `,
  styleUrl: './employee-details.component.scss'
})
export class EmployeeDetailsComponent {
  public employees:any=[];
  constructor(private _employerService:EmployeeService){

  }
  ngOnInit(){
    this._employerService.getEmployees()
    .subscribe(data => this.employees= data);
  }
}

import { Component } from '@angular/core';
import { LowerCasePipe,UpperCasePipe,TitleCasePipe,SlicePipe,JsonPipe,DecimalPipe, PercentPipe, CurrencyPipe,DatePipe, NgFor, NgForOf } from '@angular/common';
import { EmployeeService } from '../employee.service';
@Component({
  selector: 'employee-list',
  standalone: true,
  imports: [LowerCasePipe,UpperCasePipe,TitleCasePipe,SlicePipe,JsonPipe,DecimalPipe, PercentPipe, CurrencyPipe, DatePipe,NgFor],
  template: `
  <!-- pipe template -->
  <!-- <h1>{{name | lowercase}}<h1>
  <h1>{{name | uppercase}}<h1>
  <h1>{{name | titlecase}}<h1>
  <h1>{{name | slice:4}}<h1>
  <h1>{{name | slice:4:6}}<h1>
  <h1>{{name | slice:4}}<h1>
  <h1>{{objects | json}}<h1>
  <h1>{{5.78 | number:'2.4-5'}}<h1>
  <h1>{{objects | json}}<h1> -->
  <!-- <h1>{{0.45 | percent}}<h1>
  <h1>{{35 | currency}}<h1>
  <h1>{{35 | currency:'EUR'}}<h1>
  <h1>{{35 | currency:'EUR':'code'}}<h1>
  <h1>{{date}}<h1>
  <h1>{{date | date:'short'}}<h1>
  <h1>{{date | date:'shortDate'}}<h1>
  <h1>{{date | date:'shortTime'}}<h1> -->
    <h2>Employee-list</h2>
    <ul *ngFor="let employee of employees">
      <li>{{employee.name}}</li>
    </ul>
  `
  ,
  styleUrl: './test.component.scss'
})

export class TestComponent {
  public name="TesT CompoNenT";
  public objects={
    "firstName":"Martin",
    "LastName": "Marshin"
  };
  public date= new Date();
  public employees:any=[];
  constructor(private _employerService:EmployeeService){

  }
  ngOnInit(){
    this._employerService.getEmployees()
    .subscribe(data => this.employees= data);
  }
}

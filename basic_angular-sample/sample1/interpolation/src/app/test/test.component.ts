import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-test',
  standalone: true,
  imports: [FormsModule],
  template: `
  <input [(ngModel)]="denName" type="text"/>
  {{denName}}

  {{this.greeting}}`,
  styles: [`
    .text-success{
      color:green;
    }
    .text-danger{
      color:red;
    }
    .text-special{
      font-style:Bold;
    }`]
})
export class TestComponent {
public denName="";
name ="vishwas";
myID="VishwaParama";
successclass= "text-success";
public did=false;
public haserror= false;
public textSpecial= true;
public greeting="";
public messageClass={
  "text-success":!this.successclass,
  "text-danger":!this.haserror,
  "text-special":this.textSpecial
}

greet(){
  return "hello "+ this.greeting;
}
onclick(Event:any){
console.log(this.greet());
this.greeting=Event.type;
}
}

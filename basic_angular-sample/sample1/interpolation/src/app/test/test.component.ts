import { Component } from '@angular/core';

@Component({
  selector: 'app-test',
  standalone: true,
  imports: [],
  template: `
  <h1 [style.color]="haserror?'red':'green'">style binding</h1>
  <input  #myinput bind-disabled="did" [id]="myID" type="text" value="name"/>
  <Button (click)="onclick($event)">Greet</Button>
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

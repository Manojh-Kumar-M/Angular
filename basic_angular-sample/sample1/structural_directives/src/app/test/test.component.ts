import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-test',
  standalone: true,
  imports: [CommonModule],
  template: `
  <h1>hello {{parentData}}</h1>
  <button (click)="fireEvent()">Emitter</button>
`,
  styleUrl: './test.component.less'
})
export class TestComponent {
  @Input() public parentData:any;
  @Output () public childEvent= new EventEmitter();
  fireEvent(){
    this.childEvent.emit("Hello CodeEvolution");
  }
}

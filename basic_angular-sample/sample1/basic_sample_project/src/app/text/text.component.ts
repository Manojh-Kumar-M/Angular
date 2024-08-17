import { Component } from '@angular/core';

@Component({
  selector: '[app-text]',
  standalone: true,
  imports: [],
  template: `<div>
    Marks
    <div>mark1</div>
    <div>mark2</div></div>`,
styles: [`div{
  color:red;
}`]
})
export class TextComponent {

}

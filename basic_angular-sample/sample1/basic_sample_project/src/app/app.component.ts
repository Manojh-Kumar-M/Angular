import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TextComponent } from "./text/text.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TextComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Jarvis';
}


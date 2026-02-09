import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Questions } from '../questions/questions';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Questions],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('reins-valentine');
}

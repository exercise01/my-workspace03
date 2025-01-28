import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './html01/app.component.html',
  styleUrl: './html01/app.component.scss'
})
export class AppComponent {
  title = 'template-simu02';
}

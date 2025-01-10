import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './html01/app.component01.html',
  styleUrl: './html01/app.component01.scss'
})
export class AppComponent {
  title = 'template-simu01';
}

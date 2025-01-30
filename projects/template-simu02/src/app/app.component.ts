import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {A11yModule, FocusOrigin} from '@angular/cdk/a11y';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, A11yModule],
  templateUrl: './html02/app.component.html',
  styleUrl: './html02/app.component.scss'
})
export class AppComponent {
  title = 'template-simu02';
}

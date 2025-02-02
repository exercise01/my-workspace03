import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {A11yModule, FocusOrigin} from '@angular/cdk/a11y';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, A11yModule, MatButtonModule, MatCardModule],
  templateUrl: './html04/app.component.html',
  styleUrl: './html04/app.component.scss'
})
export class AppComponent {
  title = 'template-simu02';
}

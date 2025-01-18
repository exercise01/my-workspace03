import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [ RouterOutlet ],
  templateUrl: './html03/app.component.html',
  styleUrl: './html03/app.component.scss'
})
export class AppComponent {
  title = 'template-simu01';
  
}

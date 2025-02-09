import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { A11yModule, FocusOrigin } from '@angular/cdk/a11y';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { ListComponent } from './item/item.component';
import { ListItemComponent } from './list-item/list-item.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, A11yModule,
    MatButtonModule, MatCardModule, 
   // ListComponent, ListItemComponent
  ],
  templateUrl: './html04/app.component.html',
  styleUrl: './html04/app.component.scss',
})
export class AppComponent {
  title = 'template-simu02';

  itemLabel = '選択してください';

  fruits = [
    'Apples',
    'Bananas',
    'Cherries',
    'Dewberries',
    'Blueberries',
    'Avocados',
  ];

  isVisibleListItem = false;

  onClickButton(): void {
    this.isVisibleListItem = !this.isVisibleListItem;
  }
}

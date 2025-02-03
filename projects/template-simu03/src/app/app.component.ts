import { Component } from '@angular/core';
import { AfterViewInit, ViewChildren, QueryList, ElementRef } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LiveAnnouncer, ListKeyManager, FocusKeyManager } from '@angular/cdk/a11y';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet ],
  templateUrl: './html01/app.component.html',
  styleUrl: './html01/app.component.scss'
})
export class AppComponent implements AfterViewInit {
  title = 'template-simu03';

  @ViewChildren('listItem')
  listItems!: QueryList<ElementRef>;   

  items = ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5'];

  listKeyManager!: ListKeyManager<any>;

  //-------------------

  @ViewChildren('focusableElement') 
  focusableElements!: QueryList<ElementRef>; 

  focusKeyManager!: FocusKeyManager<any>;
index: any;

  //LiveAnnouncer
  constructor(private liveAnnouncer: LiveAnnouncer) { }

  ngAfterViewInit() {
    this.listKeyManager = new ListKeyManager<any>(this.listItems);

    this.focusKeyManager = new FocusKeyManager<any>(this.focusableElements);
  }



  //LiveAnnouncer
  saveChanges() {
      this.liveAnnouncer.announce('変更が保存されました。');
  }

}

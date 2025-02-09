import { Component } from '@angular/core';
import { AfterViewInit, ViewChildren, QueryList, ElementRef } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LiveAnnouncer, ListKeyManager, FocusKeyManager } from '@angular/cdk/a11y';
import { FocusableOption } from '@angular/cdk/a11y';
import { ListItemDirective } from './list-item/list-item.directive';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet ],
  templateUrl: './html01/app.component.html',
  styleUrl: './html01/app.component.scss'
})
export class AppComponent implements AfterViewInit {
  title = 'template-simu03';   

  items = ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5'];

  //-------------------
  //listKeyManager!: ListKeyManager<any>;
  //@ViewChildren('listItem')
  //listItems!: QueryList<ElementRef>;  

  //option----------
  // listKeyManager!: ListKeyManager<ListItemDirective>;//error
  listKeyManager!: ListKeyManager<FocusableOption>;     // 型を FocusableOption に変更

   @ViewChildren(ListItemDirective) 
   listItems!: QueryList<ListItemDirective>;
   

  //-------------------

  @ViewChildren('focusableElement') 
  focusableElements!: QueryList<ElementRef>; 

  focusKeyManager!: FocusKeyManager<any>;
  index: any;

  //LiveAnnouncer と option
  constructor(private liveAnnouncer: LiveAnnouncer, private elementRef: ElementRef) { }


  ngAfterViewInit() {
    //this.listKeyManager = new ListKeyManager<any>(this.listItems);
    this.listKeyManager = new ListKeyManager<FocusableOption>(this.listItems) // ListKeyManager の型も FocusableOption に
      .withVerticalOrientation()
      .withHorizontalOrientation(null)
      .withWrap();

    this.listKeyManager.setFirstItemActive();

    this.focusKeyManager = new FocusKeyManager<any>(this.focusableElements);
  }

  onKeydown(event: KeyboardEvent) {
    this.listKeyManager.onKeydown(event);
  }
  //LiveAnnouncer
  saveChanges() {
      this.liveAnnouncer.announce('変更が保存されました。');
  }

}

import { Component } from '@angular/core';
import { AfterViewInit, ViewChildren, QueryList, ElementRef } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LiveAnnouncer, ListKeyManager, FocusKeyManager } from '@angular/cdk/a11y';
import { FocusableOption } from '@angular/cdk/a11y';
import { ListItemDirective } from './list-item/list-item.directive';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet ],
  templateUrl: './html02/app.component.html',
  styleUrl: './html02/app.component.scss'
})
export class AppComponent implements AfterViewInit {
  title = 'template-simu03';   

  items = ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5'];

  //option----------
  // listKeyManager!: ListKeyManager<ListItemDirective>;//error
  listKeyManager!: ListKeyManager<FocusableOption>;     // 型を FocusableOption に変更

   @ViewChildren(ListItemDirective) 
   listItems!: QueryList<ListItemDirective>;
   
  //option
  constructor(private elementRef: ElementRef) { }

  ngAfterViewInit() {
   
    this.listKeyManager = new ListKeyManager<FocusableOption>(this.listItems) // ListKeyManager の型も FocusableOption に
      .withVerticalOrientation(true)
      .withHorizontalOrientation('rtl')//'ltr' | 'rtl' | null
      .withWrap(false);
    //リスト内の最初の有効な項目をアクティブ項目に設定します。
    this.listKeyManager.setFirstItemActive();    
  }

  onKeydown(event: KeyboardEvent) {
    this.listKeyManager.onKeydown(event);
    

  }  

}

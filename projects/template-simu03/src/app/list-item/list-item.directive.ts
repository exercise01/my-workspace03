import { Directive, ElementRef, HostBinding, HostListener } from '@angular/core';
import { FocusableOption } from '@angular/cdk/a11y';

@Directive({
  selector: '[appListItem]',
  exportAs: 'appListItem' // テンプレートで参照できるように export
})
export class ListItemDirective implements FocusableOption {
  @HostBinding('tabIndex') tabIndex = -1; // 初期状態ではフォーカス不可

  constructor(private element: ElementRef) { }

  setActive(): void {
    this.tabIndex = 0; // フォーカス可能にする
    this.element.nativeElement.focus(); // 実際にフォーカスを当てる
  }

  setInactive(): void {
    this.tabIndex = -1; // フォーカス不可に戻す
  }

  focus(): void {
    this.element.nativeElement.focus(); // プログラムからフォーカスを当てる場合
  }
}

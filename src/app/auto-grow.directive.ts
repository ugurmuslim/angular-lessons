import {Directive, ElementRef, Renderer, Renderer2} from '@angular/core';

@Directive({
  selector: '[aautoGrow]',
  host: {
  '(focus)': 'onFocus()',
  '(blur)': 'onBlur()',
  }
})
export class AutoGrowDirective{

  constructor(private el: ElementRef, private renderer: Renderer) {
  }
  onFocus() {
    this.renderer.setElementStyle(this.el, 'width', '200');
  }


  onBlur() {}
}

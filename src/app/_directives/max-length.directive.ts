import { Directive, ElementRef, HostListener, Input } from '@angular/core';
//  ** Directive for maxlength when input type number**


@Directive({
  selector: '[maxLengthShouldBe]'
})
export class MaxLengthDirective {
  @Input()
  maxLengthShouldBe: number;
  constructor(private el: ElementRef) { }
 @HostListener('input') onInput(event) {
    const length = this.el.nativeElement.value ? this.el.nativeElement.value.length : 0;
   if (length > this.maxLengthShouldBe) {
      this.el.nativeElement.value = this.el.nativeElement.value.substr(0, length - 1);
    }
  }
}




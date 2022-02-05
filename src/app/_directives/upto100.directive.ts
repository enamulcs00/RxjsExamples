import { Directive, ElementRef, HostListener, Input } from "@angular/core";
//(1)  ** Directive for number between 0 to 100**
@Directive({
  selector: "[minMaxLengthDirective]",
})
export class Upto100Directive {
  @Input()
  public min: number;
  @Input()
  public max: number;
  constructor(private ref: ElementRef) {}
  @HostListener("input", ["$event"])
  public onInput(a_Event: InputEvent): void {
    let val = parseInt(this.ref.nativeElement.value);
    if (this.max !== null && this.max !== undefined && val >= this.max)
      this.ref.nativeElement.value = this.max.toString();
    else if (this.min !== null && this.min !== undefined && val <= this.min)
      this.ref.nativeElement.value = this.min.toString();
  }
}




import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[numbersCheck]',
})
export class NumbersDirective {
  regexStr = '^[a-zA-Z0-9_]*$';
  @Input() isAlphaNumeric!: boolean;

  constructor(private el: ElementRef) {}

  @HostListener('keypress', ['$event']) onKeyPress(event: any) {
    console.log("test");
    return new RegExp(this.regexStr).test(event.key);
  }

  @HostListener('paste', ['$event']) blockPaste(event: KeyboardEvent) {
    this.validateFields(event);
  }

  validateFields(event: any) {
    setTimeout(() => {
      this.el.nativeElement.value = this.el.nativeElement.value
        .replace(/[^A-Za-z ]/g, '')
        .replace(/\s/g, '');
      event.preventDefault();
    }, 100);
  }
}

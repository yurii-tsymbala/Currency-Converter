import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[numbersCheck]',
})
export class NumbersDirective {
  @HostListener('keypress', ['$event']) onKeyPress(event: any) {
    if (event.key && !this.isValid(event.key)) {
      event.preventDefault();
    }
  }

  isValid(str: string) {
    return str.match(/[0-9.]+/g);
  }
}

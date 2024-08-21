import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[onlyNumber]'
})
export class OnlyNumbersDirectiveDirective {

  constructor() { }
  @HostListener('input', ['$event']) onInput(event: any) {

    const input = event.target;

    const value = input.value;

    const numericValue = value.replace(/[^0-9]/g, '');

    input.value = numericValue;

  }

}

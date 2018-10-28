import {Directive, ElementRef, HostListener, Input} from '@angular/core';

@Directive({
  selector: '[appInputFormat]'
})
export class InputFormatDirective {

  @Input('format') format: string;
  @HostListener('focus') onFucus() {
    console.log('on focus');
  }
  @HostListener('blur') onBlur() {
    const value: string  = this.el.nativeElement.value;
    if ( this.format == 'uppercase') {
    this.el.nativeElement.value = value.toUpperCase();
    }else {
        this.el.nativeElement.value = value.toLowerCase();

    }
  }
  constructor(private el: ElementRef) { }

}

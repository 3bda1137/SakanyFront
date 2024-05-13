import { Directive, ElementRef, Input, AfterViewInit } from '@angular/core';

@Directive({
  selector: '[PriceColorDirective]',
  standalone: true,
})
export class PriceColorDirectiveDirective {
  @Input() shapeColor: string = '#6449E7';

  constructor(private element: ElementRef) {}
  ngAfterViewInit() {
    this.element.nativeElement.style.backgroundColor = this.shapeColor;
  }
}

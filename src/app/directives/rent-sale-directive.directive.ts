import {
  Directive,
  ElementRef,
  Renderer2,
  AfterViewInit,
  Input,
} from '@angular/core';

@Directive({
  selector: '[RentSaleDirective]',
  standalone: true,
})
export class RentSaleDirectiveDirective implements AfterViewInit {
  private pseudoElement: HTMLElement;
  @Input() shapeColor: string = '#6449E7';
  @Input() ttttt: string = '';

  constructor(private elementRef: ElementRef, private renderer: Renderer2) {
    this.pseudoElement = this.renderer.createElement('div');

    elementRef.nativeElement.style.backgroundColor = `${this.shapeColor}`;
  }

  ngAfterViewInit() {
    this.elementRef.nativeElement.style.backgroundColor = this.shapeColor;
    this.renderer.setStyle(this.pseudoElement, 'content', '""');
    this.renderer.setStyle(this.pseudoElement, 'borderWidth', '12px');
    this.renderer.setStyle(this.pseudoElement, 'borderStyle', 'solid');
    this.renderer.setStyle(
      this.pseudoElement,
      'borderColor',
      `transparent transparent transparent  ${this.shapeColor}`
    );
    this.renderer.setStyle(this.pseudoElement, 'position', 'absolute');
    this.renderer.setStyle(this.pseudoElement, 'left', '74px');
    this.renderer.setStyle(this.pseudoElement, 'top', '4px');
    this.renderer.setStyle(this.pseudoElement, 'transform', 'translateY(0%)');
    this.renderer.setStyle(this.pseudoElement, 'zIndex', '55');
    this.renderer.setStyle(
      this.pseudoElement,
      'transition',
      'top 0.2s, transform 0.2s'
    );
    this.renderer.insertBefore(
      this.elementRef.nativeElement,
      this.pseudoElement,
      this.elementRef.nativeElement.firstChild
    );
  }
}

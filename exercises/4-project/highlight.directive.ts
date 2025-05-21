import { Directive, ElementRef, Input, OnChanges } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective implements OnChanges {
  @Input('appHighlight') highlightColor: string = '';

  constructor(private el: ElementRef) {}

  ngOnChanges() {
    // TODO: Cambia el color de fondo del elemento según highlightColor
  }
}

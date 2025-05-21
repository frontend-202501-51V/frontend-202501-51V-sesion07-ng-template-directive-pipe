import { Directive, ElementRef, Input, Renderer2, OnChanges } from '@angular/core';

@Directive({
  selector: '[appImportant]'
})
export class ImportantDirective implements OnChanges {
  @Input('appImportant') isImportant = false;

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnChanges() {
    // Implementa aquí la lógica para resaltar el botón si la tarea es importante
  }
}

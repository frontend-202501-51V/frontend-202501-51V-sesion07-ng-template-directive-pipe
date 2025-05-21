import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appColorOnClick]'
})
export class ColorOnClickDirective {
  // TODO: Implementa aquí la lógica para cambiar el color del texto al hacer clic
  constructor(private el: ElementRef, private renderer: Renderer2) {}

  @HostListener('click')
  onClick() {
    // Cambia el color del texto al hacer clic
    this.renderer.setStyle(this.el.nativeElement, 'color', 'red');
  }
}

import { Directive, ElementRef, Input, Renderer2, OnChanges } from '@angular/core';

@Directive({
  selector: '[appImportant]'
})
export class ImportantDirective implements OnChanges {
  @Input('appImportant') isImportant = false;

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnChanges() {
    if (this.isImportant) {
      this.renderer.setStyle(this.el.nativeElement, 'color', 'orange');
      this.renderer.setStyle(this.el.nativeElement, 'fontWeight', 'bold');
    } else {
      this.renderer.removeStyle(this.el.nativeElement, 'color');
      this.renderer.removeStyle(this.el.nativeElement, 'fontWeight');
    }
  }
}

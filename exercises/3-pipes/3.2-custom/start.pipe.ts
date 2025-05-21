import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverse'
})
export class ReversePipe implements PipeTransform {
  // TODO: Implementa aquí la lógica para invertir el texto recibido
  transform(value: string): string {
    return value ? value.split('').reverse().join('') : '';
  }
}

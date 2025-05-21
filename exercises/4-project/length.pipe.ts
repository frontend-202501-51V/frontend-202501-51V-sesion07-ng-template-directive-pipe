import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'length' })
export class LengthPipe implements PipeTransform {
  transform(value: any[]): number {
    // TODO: Devuelve la longitud del array recibido
    return 0;
  }
}

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'currencyFormat'
})
export class CurrencyFormatPipe implements PipeTransform {
  transform(value: number, currency: string, symbol: string, digits: string): string {
    // Implementa aquí la lógica para formatear el valor como moneda
    return '';
  }
}

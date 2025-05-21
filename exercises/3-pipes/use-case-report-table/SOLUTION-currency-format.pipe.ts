import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'currencyFormat'
})
export class CurrencyFormatPipe implements PipeTransform {
  transform(value: number, currency: string = 'USD', symbol: string = 'symbol', digits: string = '1.2-2'): string {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency,
      minimumFractionDigits: parseInt(digits.split('-')[0].split('.')[1] || '2', 10),
      maximumFractionDigits: parseInt(digits.split('-')[1] || '2', 10)
    }).format(value);
  }
}

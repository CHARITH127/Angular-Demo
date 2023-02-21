import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'percentage'
})
export class PercentagePipe implements PipeTransform {

  transform(value: String | null, ...args: unknown[]): String {
    return `${value}%`;
  }

}

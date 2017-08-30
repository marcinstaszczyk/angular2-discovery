import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'wordReverse'
})
export class WordReversePipe implements PipeTransform {

  transform(value: string, args?: any): any {
    if (value.length === 0) {
      return value;
    }
    return value.split(" ").reverse().join(" ");
  }

}

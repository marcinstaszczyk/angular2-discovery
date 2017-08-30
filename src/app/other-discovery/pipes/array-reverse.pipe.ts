import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'arrayReverse'
})
export class ArrayReversePipe implements PipeTransform {

  transform(value: Array<any>, args?: any): any {
    return value.map((v) => v).reverse();
  }

}

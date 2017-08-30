import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'extractProperty'
})
export class ExtractPropertyPipe implements PipeTransform {

  transform(value: any, property: string | number, args?: any): any {
    return value[property];
  }

}

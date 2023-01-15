import { Pipe, PipeTransform } from '@angular/core';

/**
 * Pipe to multiply numbers
 */
@Pipe({
  name: 'multBy'
})
export class MultBy implements PipeTransform {
  transform(value: any, mult = 2) {
    return value*mult;
  }
  
}
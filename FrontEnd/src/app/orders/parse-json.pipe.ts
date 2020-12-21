/* eslint-disable class-methods-use-this */
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'parseJson',
})
export class ParseJsonPipe implements PipeTransform {
  transform(allHeroes: any) {
    return JSON.parse(allHeroes);
  }
}

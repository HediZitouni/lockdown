import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'msToS'
})
export class MsToSPipe implements PipeTransform {

  transform(ms: number): string {
    return (ms/1000).toFixed(3);
  }

}

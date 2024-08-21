import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'statusreturn',
})
export class StatusreturnPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    if (value === true) {
      return 'درحال کار';

    }else{
      return 'خروج از کار'
    }
  }

}

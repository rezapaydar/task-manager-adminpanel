import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'changeRule',
  standalone: true
})
export class ChangeRulePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    if (value=='admin') {
      return 'ادمین'
    }else if (value=='senior technician') {
      return 'تکنسین ارشد'
    }else{
      return ''
    }
    
  }

}

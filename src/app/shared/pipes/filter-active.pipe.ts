import { Pipe, PipeTransform } from '@angular/core';
import { Employee } from '@features/employee/interfaces/employee.interface';

@Pipe({
  name: 'filterActive'
})
export class FilterActivePipe implements PipeTransform {

  transform(value: Employee[], condition: boolean): Employee[] {
    if(condition){
      return value.filter((employee: Employee) => employee.status === 'Active')
    }
    return value;
  }

}

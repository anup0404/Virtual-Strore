import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterItems',
})
export class FilterItemsPipe implements PipeTransform {
  transform(value: any[], filterItems: string, titleName: string): any[] {
    const result: any = [];
    if (!value || filterItems === '' || titleName === '') {
      return value;
    }
    value.forEach((a: any) => {
      if (
        a[titleName]
          .ttrim()
          .toLowerCase()
          .includes(filterItems.toLocaleLowerCase())
      ) {
        result.push(a);
      }
    });
    return result;
  }
}

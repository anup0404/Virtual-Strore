import { Pipe, PipeTransform } from '@angular/core';
import { ProductList } from '../product-list';

@Pipe({
  name: 'filterItems',
})
export class FilterItemsPipe implements PipeTransform {
  transform(value: ProductList[], filterTerm: string): ProductList[] {
    if (!value || !filterTerm.trim()) {
      return value;
    }
    const searchTerm = filterTerm.toLowerCase().trim();
    return value.filter((item) =>
      this.itemContainsSearchTerm(item, searchTerm)
    );
  }

  private itemContainsSearchTerm(item: ProductList, searchTerm: string): boolean {
    return Object.values(item).some((value) => {
      return (
        typeof value === 'string' && value.toLowerCase().includes(searchTerm)
      );
    });
  }
}

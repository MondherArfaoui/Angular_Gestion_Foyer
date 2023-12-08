import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'rechercheUniversite'
})
export class RechercheUniversitePipe implements PipeTransform {

  transform(value: any[], term: string): any[] {
    if (!term) {
      return value;
    } else {
      return value.filter(item => item.nomUniversite.toLowerCase().includes(term.toLowerCase()));
    }
  }

}
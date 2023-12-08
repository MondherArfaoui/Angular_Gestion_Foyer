import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'rechercheEtudiant'
})
export class RechercheEtudiantPipe implements PipeTransform {

  transform(value: any[], term: string): any[] {
    if (!term) {
      return value;
    } else {
      return value.filter(item => item.cin.toString().includes(term));
    }
  }

}

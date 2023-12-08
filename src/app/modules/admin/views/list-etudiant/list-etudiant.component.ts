import { Component } from '@angular/core';
import { Etudiant } from 'src/app/core/models/etudiant/etudiant';
import { EtudiantService } from 'src/app/core/services/etudiant/etudiant.service';

@Component({
  selector: 'app-list-etudiant',
  templateUrl: './list-etudiant.component.html',
  styleUrls: ['./list-etudiant.component.css']
})
export class ListEtudiantComponent {

  constructor(public etudiantService: EtudiantService) { }

  listEtudiant: Etudiant[] = [];
  rechercheEtudiant: string = '';

  ngOnInit() {
    this.getAllEtudiants();
  }

  getAllEtudiants() {
    this.etudiantService.getAllEtudiants().subscribe((res: any) => {
      this.listEtudiant = res;
    });
  }

}

import { Component } from '@angular/core';
import { Bloc } from 'src/app/core/models/bloc/bloc';
import { Foyer } from 'src/app/core/models/foyer/foyer';
import { Universite } from 'src/app/core/models/universite/universite';
import { BlocService } from 'src/app/core/services/bloc/bloc.service';
import { ChambreService } from 'src/app/core/services/chambre/chambre.service';
import { FoyerService } from 'src/app/core/services/foyer/foyer.service';
import { UniversiteService } from 'src/app/core/services/universite/universite.service';

@Component({
  selector: 'app-info-foyer-universite',
  templateUrl: './info-foyer-universite.component.html',
  styleUrls: ['./info-foyer-universite.component.css']
})
export class InfoFoyerUniversiteComponent {

  universite!:Universite;
  foyer!:Foyer;
  listBlocs!:Bloc[];
  nombreChambres: Map<number, number> = new Map<number, number>();

  userconnect = JSON.parse(localStorage.getItem("userconnect")!);

  constructor(private foyerService:FoyerService, private universiteService:UniversiteService, private blocService:BlocService, private chambreService:ChambreService) { }

  ngOnInit(): void {
    this.getUniversiteByIdEtudiant();
  }

  getUniversiteByIdEtudiant() {
    const idEtudiant = this.userconnect.id;
    this.universiteService.getUniversiteByIdEtudiant(idEtudiant).subscribe((data) => {
      this.universite = data;
      this.getFoyerByIdEtudiant(idEtudiant);
    });
  }

  getFoyerByIdEtudiant(idEtudiant: number) {
    this.foyerService.getFoyerByIdEtudiant(idEtudiant).subscribe((data) => {
      this.foyer = data;
      this.getAllBlocsByIdFoyer(this.foyer.idFoyer);
    });
  }

  getAllBlocsByIdFoyer(idFoyer: number) {
    this.blocService.getAllBlocsByIdFoyer(idFoyer).subscribe((data) => {
      this.listBlocs = data;
      this.listBlocs.forEach(bloc => {
        this.chambreService.getNombreChambresParBloc(bloc.idBloc).subscribe((data) => {
          this.nombreChambres.set(bloc.idBloc, data);
        });
      });
    });
  }

}

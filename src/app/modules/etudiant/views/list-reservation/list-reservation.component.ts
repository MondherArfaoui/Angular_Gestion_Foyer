import { Component, ViewChild } from '@angular/core';
import { Reservation } from 'src/app/core/models/reservation/reservation';
import { ReservationService } from 'src/app/core/services/reservation/reservation.service';
import Swal from 'sweetalert2';
import { InfoFoyerUniversiteComponent } from '../info-foyer-universite/info-foyer-universite.component';
import { TypeChambre } from 'src/app/core/models/TypeChambre/type-chambre.enum';
import { ChambreService } from 'src/app/core/services/chambre/chambre.service';
import { Chambre } from 'src/app/core/models/chambre/chambre';

@Component({
  selector: 'app-list-reservation',
  templateUrl: './list-reservation.component.html',
  styleUrls: ['./list-reservation.component.css']
})
export class ListReservationComponent {

  reservation!:Reservation;
  typesChambre: string[] = Object.values(TypeChambre);
  chambres: Chambre[] = [];
  idBlocSelectionne!: number;
  typeChambreSelectionne!: TypeChambre;
  userconnect = JSON.parse(localStorage.getItem("userconnect")!);

  constructor(private reservationService:ReservationService, private chambreService:ChambreService) { }

  ngOnInit(): void {
    const idEtudiant = this.userconnect.id;
    this.reservationService.getCurrentReservationByEtudiantId(idEtudiant).subscribe((data) => {
      this.reservation = data;
    });
  }

  annulerReservation() {
    const cinEtudiant = this.userconnect.cin;
    Swal.fire({
      title: 'Êtes-vous sûr?',
      text: "Vous ne pourrez pas revenir en arrière!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Oui, annuler!'
    }).then((result) => {
      if (result.isConfirmed) {
        // Appel de la méthode d'annulation
        this.reservationService.annulerReservation(cinEtudiant).subscribe((data) => {
          Swal.fire(
            'Annulé!',
            'Votre réservation a été annulée.',
            'success'
          );
          this.ngOnInit();
        });
      }
    });
  }

  onBlocChange(event: Event) {
    const selectElement = event.target as HTMLSelectElement;
    this.idBlocSelectionne = Number(selectElement.value);
    if (this.idBlocSelectionne) {
      this.getChambresParBlocEtType();
    }
  }
  
  onTypeChange(event: Event) {
    const selectElement = event.target as HTMLSelectElement;
    this.typeChambreSelectionne = selectElement.value as TypeChambre;
    if (this.typeChambreSelectionne) {
      this.getChambresParBlocEtType();
    }
  }

  getChambresParBlocEtType() {
    this.chambreService.getChambresParBlocEtType(this.idBlocSelectionne, this.typeChambreSelectionne)
    .subscribe(chambres => {
      this.chambres = chambres;
    });
  }

  ajouterReservation() {
  const cinEtudiant = this.userconnect.cin;
  this.reservationService.ajouterReservation(this.chambres[0].idChambre, cinEtudiant)
    .subscribe((data) => {
      const Toast = Swal.mixin({
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 2000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.onmouseenter = Swal.stopTimer;
          toast.onmouseleave = Swal.resumeTimer;
        }
      });

      Toast.fire({
        icon: "success",
        title: "Réservation effectuée avec succès"
      });

      this.ngOnInit();
    });
}


}

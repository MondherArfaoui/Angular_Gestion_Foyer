import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Foyer } from 'src/app/core/models/foyer/foyer';
import { FoyerService } from 'src/app/core/services/foyer/foyer.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-list-foyer',
  templateUrl: './list-foyer.component.html',
  styleUrls: ['./list-foyer.component.css'],
})
export class ListFoyerComponent {
  ListeFoyer: Foyer[] = [];
  selectedIdFoyer!: number;
  constructor(private _foyer_service: FoyerService, private _router: Router) {}
  ngOnInit(): void {
    if (this.GetAllFoyer() == null) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'IPas de foyer pour le moment !',
      });
    } else {
      this.GetAllFoyer();
    }
  }

  GetAllFoyer() {
    return this._foyer_service.getAllFoyers().subscribe((data) => {
      this.ListeFoyer = data;
    });
  }

  supprimerFoyer(id: number) {
    return this._foyer_service.deleteFoyer(id).subscribe((data) => {
      Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!',
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire({
            title: 'Deleted!',
            text: 'Your file has been deleted.',
            icon: 'success',
          });
          this.GetAllFoyer();
        }
      });
    });
  }

  getFoyerParId() {
    return this._foyer_service.getFoyerById(2).subscribe((data) => {
      console.log('data');
    });
  }

  voirDetails(idFoyer: number) {
    this._router.navigate(['/dashboard/details/foyer/', idFoyer]);
  }
  updateFoyer(idFoyer: number) {
    this._router.navigate(['/dashboard/edit/foyer/', idFoyer]);
  }
  getIdBloc(id: number) {
    this.selectedIdFoyer = id;
  }
}

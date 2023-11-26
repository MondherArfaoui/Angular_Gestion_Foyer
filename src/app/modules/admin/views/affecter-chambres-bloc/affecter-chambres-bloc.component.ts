import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Bloc } from 'src/app/core/models/bloc/bloc';
import { Chambre } from 'src/app/core/models/chambre/chambre';
import { BlocService } from 'src/app/core/services/bloc/bloc.service';
import { ChambreService } from 'src/app/core/services/chambre/chambre.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-affecter-chambres-bloc',
  templateUrl: './affecter-chambres-bloc.component.html',
  styleUrls: ['./affecter-chambres-bloc.component.css'],
})
export class AffecterChambresBlocComponent implements OnInit {
  listeChambres: Chambre[] = [];
  SelectedChambre: Chambre[] = [];
  listeBloc: Bloc[] = [];
  ListeIdChambre: number[] = [];
  IsReady: boolean = false;
  constructor(
    private _chambre_service: ChambreService,
    private _bloc_Service: BlocService,
    private _route: Router
  ) {}
  ngOnInit(): void {
    this.getAllChambre();
    this.recupererTousBloc();
  }
  gererSelection(chambre: Chambre) {
    const index = this.SelectedChambre.indexOf(chambre);
    if (index > -1) {
      this.SelectedChambre.splice(index, 1);
    } else {
      this.SelectedChambre.push(chambre);
    }
    console.log(this.SelectedChambre);
    this.SelectedChambre.forEach((Element) => {
      this.ListeIdChambre.push(Element.idChambre);
    });
  }

  affecterchambreBlocForm = new FormGroup({
    idBloc: new FormControl('', Validators.required),
  });

  recupererTousBloc() {
    this._bloc_Service.getAllBlocs().subscribe({
      next: (data) => {
        if (data.length != null) {
          this.listeBloc = data;
          console.log(this.listeBloc);
        } else {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Liste is empty!',
          });
        }
      },
      error: (error) => {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Something went wrong!',
        });
      },
    });
  }

  onSelectChange(event: any) {
    if (event.target.value != null) {
      this.IsReady = true;
    }
  }
  resetFormAndListe() {
    this.affecterchambreBlocForm.reset();
    this.SelectedChambre = [];
  }
  getAllChambre() {
    this._chambre_service.getAllChambres().subscribe({
      next: (data) => {
        this.listeChambres = data;
        console.log('n7ibik', this.listeChambres);
      },
      error: (error) => {
        console.log(error);
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Something went wrong!',
        });
      },
    });
  }
  affecterBlocToFoyer() {
    console.log(this.affecterchambreBlocForm.value);
    const idbloc = Number(this.affecterchambreBlocForm.get('idBloc')?.value);
    if (this.affecterchambreBlocForm.valid && this.SelectedChambre.length > 0) {
      this._bloc_Service
        .affecterChambresABloc(this.ListeIdChambre, idbloc)
        .subscribe({
          next: (data) => {
            Swal.fire({
              icon: 'success',
              title: 'Success!',
              text: 'Chambre completed affected  successfully.',
            });
            // this._route.navigate(['admin/list-bloc-foyer']);
          },
          error: () => {
            Swal.fire({
              icon: 'error',
              title: 'Oops...',
              text: 'Something went wrong!',
            });
          },
        });
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Invalid Data!',
      });
    }
  }
}

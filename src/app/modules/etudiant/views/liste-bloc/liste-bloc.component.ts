import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Bloc } from 'src/app/core/models/bloc/bloc';
import { BlocService } from 'src/app/core/services/bloc/bloc.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-liste-bloc',
  templateUrl: './liste-bloc.component.html',
  styleUrls: ['./liste-bloc.component.css'],
})
export class ListeBlocComponent implements OnInit {
  blocListe: Bloc[] = [];
  constructor(private _bloc_service: BlocService, private _route: Router) {}
  ngOnInit(): void {
    this.getAllBloc();
  }

  detailsById(idbloc: number) {
    this._route.navigate(['etudiant/details_bloc/' + idbloc]);
  }
  getAllBloc() {
    this._bloc_service.getAllBlocs().subscribe({
      next: (data) => {
        if (data != null) {
          console.log('slouma', data);
          this.blocListe = data;
        } else {
          Swal.fire('Liste bloc est vide !');
        }
      },
      error: () => {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Something went wrong!',
        });
      },
    });
  }
}

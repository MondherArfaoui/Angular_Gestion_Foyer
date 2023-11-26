import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Bloc } from 'src/app/core/models/bloc/bloc';
import { BlocService } from 'src/app/core/services/bloc/bloc.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-details-bloc',
  templateUrl: './details-bloc.component.html',
  styleUrls: ['./details-bloc.component.css'],
})
export class DetailsBlocComponent implements OnInit {
  idBloc!: number;
  bloc!: Bloc;
  constructor(
    private _route: ActivatedRoute,
    private _bloc_service: BlocService
  ) {}

  ngOnInit(): void {
    this._route.params.subscribe((params) => {
      this.idBloc = +params['idbloc'];
      this.getBlocById();
    });
  }
  getBlocById() {
    this._bloc_service.getBlocById(this.idBloc).subscribe({
      next: (data) => {
        this.bloc = data;
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

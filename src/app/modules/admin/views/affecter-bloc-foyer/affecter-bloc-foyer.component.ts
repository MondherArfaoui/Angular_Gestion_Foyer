import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Foyer } from 'src/app/core/models/foyer/foyer';
import { BlocService } from 'src/app/core/services/bloc/bloc.service';
import { FoyerService } from 'src/app/core/services/foyer/foyer.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-affecter-bloc-foyer',
  templateUrl: './affecter-bloc-foyer.component.html',
  styleUrls: ['./affecter-bloc-foyer.component.css'],
})
export class AffecterBlocFoyerComponent implements OnInit {
  idBloc!: number;
  listeFoyer: Foyer[] = [];
  affecterBlocForm!: FormGroup;
  constructor(
    private _router: ActivatedRoute,
    private _foyer_service: FoyerService,
    private _builder: FormBuilder,
    private _bloc_service: BlocService
  ) {}
  ngOnInit(): void {
    this._router.params.subscribe((data) => {
      this.idBloc = +data['idbloc'];
      this.getAllFoyer();

      this.affecterBlocForm = this._builder.group({
        idFoyer: ['', Validators.required],
      });
    });
  }
  resetForm() {
    this.affecterBlocForm.reset();
  }
  getAllFoyer() {
    this._foyer_service.getAllFoyers().subscribe({
      next: (data) => {
        this.listeFoyer = data;
        console.log(this.listeFoyer);
      },
      error: (error) => {
        return error;
      },
    });
  }

  affecterfoyerAunBloc() {
    console.log(this.affecterBlocForm);
    const idFoyer = this.affecterBlocForm.get('idFoyer')?.value;

    console.log(idFoyer);
    if (this.affecterBlocForm.valid) {
      this._bloc_service.affecterBlocAFoyer(this.idBloc, idFoyer).subscribe({
        next: (data) => {
          Swal.fire({
            icon: 'success',
            title: 'Success!',
            text: 'bloc affected successfully.',
          });
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
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'invalid data!',
      });
    }
  }
}

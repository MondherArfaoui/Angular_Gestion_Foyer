import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Bloc } from 'src/app/core/models/bloc/bloc';
import { BlocService } from 'src/app/core/services/bloc/bloc.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-ajouter-bloc',
  templateUrl: './ajouter-bloc.component.html',
  styleUrls: ['./ajouter-bloc.component.css'],
})
export class AjouterBlocComponent {
  constructor(private _blocService: BlocService) {}
  addBlocForm = new FormGroup({
    nomBloc: new FormControl('', Validators.required),
    capaciteBloc: new FormControl('', Validators.required),
  });
  resetForm() {
    this.addBlocForm.reset();
  }
  creatNewBloc() {
    const data = this.addBlocForm.value as unknown as Bloc;
    if (this.addBlocForm.valid) {
      this._blocService.addBloc(data).subscribe(
        (data) => {
          Swal.fire({
            icon: 'success',
            title: 'Success!',
            text: 'bloc completed added  successfully.',
          });
        },
        (error) => {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Something went wrong!',
          });
        }
      );
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'data invalid!',
      });
    }
  }
}

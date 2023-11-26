import { Component, OnInit } from '@angular/core';
import { Bloc } from 'src/app/core/models/bloc/bloc';
import { BlocService } from 'src/app/core/services/bloc/bloc.service';
import { UpdateBlocComponent } from '../update-bloc/update-bloc.component';
import Swal from 'sweetalert2';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-list-bloc-foyer',
  templateUrl: './list-bloc-foyer.component.html',
  styleUrls: ['./list-bloc-foyer.component.css'],
})
export class ListBlocFoyerComponent implements OnInit {
  ListBlocs: Bloc[] = [];
  UpdateBlocForm!: FormGroup;

  constructor(
    private _blocService: BlocService,
    private _router: Router,
    private _builder: FormBuilder
  ) {}
  ngOnInit(): void {
    this.getAllBlocs();
    this.UpdateBlocForm = this._builder.group({
      nomBloc: ['', Validators.required],
      capaciteBloc: ['', Validators.required],
    });
  }
  getAllBlocs() {
    this._blocService.getAllBlocs().subscribe({
      next: (data) => {
        if (data.length == 0) {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Accun bloc trouvé',
          });
        } else {
          console.log(data);
          this.ListBlocs = data;
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

  deleteBloc(id: number) {
    this._blocService.deleteBloc(id).subscribe({
      next: (data) => {
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
              text: 'Your bloc has been deleted.',
              icon: 'success',
            });
          }
          this.getAllBlocs();
        });
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
  retournerVersListeBloc() {
    console.log('yes');
  }
  getIdBloc(id: number) {
    this._blocService.getBlocById(id).subscribe({
      next: (data) => {
        this.UpdateBlocForm.patchValue(data);
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

  updateBloc() {
    if (this.UpdateBlocForm.valid) {
      this._blocService.updateBloc(this.UpdateBlocForm.value).subscribe({
        next: (data) => {
          Swal.fire({
            icon: 'success',
            title: 'Success!',
            text: 'bloc completed Updated  successfully.',
          });
          this.getAllBlocs();
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
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Invalid data!',
    });
  }
  detailsById(idbloc: number) {
    this._router.navigate(['admin/details_bloc/' + idbloc]);
  }
  affecter(idbloc: number) {
    this._router.navigate(['admin/affecter_foyer_bloc/' + idbloc]);
  }
}

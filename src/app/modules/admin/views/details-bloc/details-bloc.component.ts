import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Bloc } from 'src/app/core/models/bloc/bloc';
import { BlocService } from 'src/app/core/services/bloc/bloc.service';

@Component({
  selector: 'app-details-bloc',
  templateUrl: './details-bloc.component.html',
  styleUrls: ['./details-bloc.component.css'],
})
export class DetailsBlocComponent implements OnInit {
  selectedId!: number;
  bloc!: Bloc;
  constructor(
    private _route: ActivatedRoute,
    private _blocService: BlocService
  ) {}
  ngOnInit(): void {
    this._route.params.subscribe((data) => {
      this.selectedId = +data['idbloc'];
      this.recupereBlocParId();
    });
  }
  recupereBlocParId() {
    return this._blocService.getBlocById(this.selectedId).subscribe({
      next: (data) => {
        this.bloc = data;
        console.log(this.bloc);
      },
      error: (error) => {
        return error;
      },
    });
  }
}

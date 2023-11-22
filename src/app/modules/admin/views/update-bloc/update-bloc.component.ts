import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-bloc',
  templateUrl: './update-bloc.component.html',
  styleUrls: ['./update-bloc.component.css'],
})
export class UpdateBlocComponent implements OnInit {
  idBloc!: number;
  constructor(private _route: ActivatedRoute, private route: Router) {}
  ngOnInit(): void {
    this._route.params.subscribe((params) => {
      this.idBloc = +params['idBloc'];
      console.log('dscs', this.idBloc);
    });
  }
  retournerVersListeBloc() {
    console.log('tentative de routage ');
    this.route.navigate(['admin/list-bloc-foyer']);
  }
}

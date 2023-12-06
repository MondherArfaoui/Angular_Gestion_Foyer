import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { TypeChambre } from 'src/app/core/models/TypeChambre/type-chambre.enum';
import { Bloc } from 'src/app/core/models/bloc/bloc';
import { Chambre } from 'src/app/core/models/chambre/chambre';
import { BlocService } from 'src/app/core/services/bloc/bloc.service';
import { ChambreService } from 'src/app/core/services/chambre/chambre.service';

@Component({
  selector: 'app-add-chambre-bloc',
  templateUrl: './add-chambre-bloc.component.html',
  styleUrls: ['./add-chambre-bloc.component.css']
})
export class AddChambreBlocComponent implements OnInit{

  showAddRoomFormModel = false;
  chambres: any[] = [];
  blocks: Bloc[] = [];
  typeChambreEnum: string[] = Object.values(TypeChambre);

  newRoom: any = {
    numeroChambre: 0,
    typeC: this.typeChambreEnum[0],
    bloc: new Bloc()
  };

  constructor(private chambreService: ChambreService,
    private blocService: BlocService,
    private modalService: NgbModal,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.loadBlocs();
  }

  loadBlocs() {
    this.blocService.getAllBlocs().subscribe(
      (data: Bloc[]) => {
        this.blocks = data;
      },
      (error) => {
        console.error('Error fetching bloc', error);
      }
    )
  }

  loadChambres() {
    this.chambreService.getAllChambres().subscribe(
      (data: Chambre[]) => {
        this.chambres = data;
      },
      (error) => {
        console.error('Error fetching room', error);
      }
    );
  }


  addChambre() {
    this.chambreService.addChambre(this.newRoom).subscribe(
      (response) => {
        console.log('Room added successfully', response);
        this.loadChambres();
        this.newRoom = {
          numeroChambre: 0,
          typeC: this.typeChambreEnum[0],
          bloc: new Bloc()
        };
        // this.closeAddRoomModal()
        this.router.navigate(['/admin/chambre/list-chambre-bloc']);

      },
      (error) => {
        console.error('Error adding room', error);
      }
    );

  }

  closeAddRoomModal() {
    this.showAddRoomFormModel = false;
    this.modalService.dismissAll();
    this.router.navigate(['/admin/chambre/list-chambre-bloc']);
  }

}

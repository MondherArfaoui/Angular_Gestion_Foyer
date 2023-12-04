import { Component, OnInit } from '@angular/core';
import { Bloc } from 'src/app/core/models/bloc/bloc';
import { Chambre } from 'src/app/core/models/chambre/chambre';
import { TypeChambre } from 'src/app/core/models/TypeChambre/type-chambre.enum';
import { BlocService } from 'src/app/core/services/bloc/bloc.service';

import { ChambreService } from 'src/app/core/services/chambre/chambre.service';

interface SelectedRoom {
  idChambre?: number;
  numeroChambre?: string;
  typeC?: TypeChambre;
  bloc?: Bloc;
}
@Component({
  selector: 'app-list-chambre-bloc',
  templateUrl: './list-chambre-bloc.component.html',
  styleUrls: ['./list-chambre-bloc.component.css']
})
export class ListChambreBlocComponent implements OnInit {
  chambres: any[] = [];
  // chambres: Chambre[] = [];
  showAddRoomForm = false;
  showUpdateRoomForm = false;
  showRoomForm = false;

  selectedRoom: SelectedRoom | null = null;

  typeChambreEnum: string[] = Object.values(TypeChambre);

  blocks: Bloc[] = [];

  newRoom: any = {
    numeroChambre: 0,
    typeC: this.typeChambreEnum[0],
    bloc: new Bloc()
  };




  constructor(private chambreService: ChambreService,
    private blocService: BlocService,) { }

  ngOnInit(): void {
    this.loadChambres();
    this.loadBlocs();
  }

  loadChambres() {
    this.chambreService.getAllChambres().subscribe(
      (data: Chambre[]) => {
        this.chambres = data;
      },
      (error) => {
        console.error('Error fetching chambres', error);
      }
    );
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

  displayChambre(chambreId: number) {
  }

  deleteChambre(chambreId: number) {
    const confirmDelete = confirm('Are you sure you want to delete this room?');

    if (!confirmDelete) {
      return;
    }

    this.chambreService.deleteChambre(chambreId).subscribe(
      (response) => {
        console.log(`Server response:`, response);
        console.log(`Room with ID ${chambreId} deleted successfully`);
        this.loadChambres();
      },
      (error) => {
        console.error(`Error deleting room with ID ${chambreId}`, error);
      }
    );
  }

  updateChambre(chambreId: number) {
    this.showUpdateRoomForm = true;  // Set showRoomForm to true instead of showUpdateRoomForm
  }


  addChambre() {
    this.showAddRoomForm = true;
    this.showUpdateRoomForm = false;
    this.showRoomForm = false;

    this.chambreService.addChambre(this.newRoom).subscribe(
      (response) => {
        console.log('Room added successfully', response);
        this.loadChambres();
        this.cancelAddChambre();
        this.newRoom = {
          numeroChambre: 0,
          typeC: this.typeChambreEnum[0],
          bloc: new Bloc()
        };

      },
      (error) => {
        console.error('Error adding room', error);
      }
    );

  }

  viewChambreDetails(chambre: any) {
    this.selectedRoom = chambre;
    this.showRoomForm = true;
    this.showUpdateRoomForm = false;
    this.showAddRoomForm = false;
  }

  updateChambreDetails(chambre: any) {
    this.selectedRoom = chambre;
    this.showUpdateRoomForm = true;
    this.showRoomForm = false;
    this.showAddRoomForm = false;
  }
  updateRoom() {

    if (!this.selectedRoom) {
      return;
    }

    const updatedRoom = {
      idChambre: this.selectedRoom.idChambre ?? 0,  // Provide a default value, adjust as needed
      numeroChambre: this.selectedRoom.numeroChambre ?? '',
      typeC: this.selectedRoom.typeC ?? TypeChambre,  // Provide a default value, adjust as needed
      bloc: {
        idBloc: this.selectedRoom.bloc?.idBloc ?? 0,  // Use optional chaining to handle potential null or undefined
        nomBloc: this.selectedRoom.bloc?.nomBloc ?? '',
        // add other properties if needed
      },
    };

    this.chambreService.updateChambre(updatedRoom).subscribe(
      (response) => {
        console.log(`Room with ID ${this.selectedRoom!.idChambre} updated successfully`, response);
        this.loadChambres();
        this.cancelAddChambre();
      },
      (error) => {
        console.error(`Error updating room with ID ${this.selectedRoom!.idChambre}`, error);
      }
    );


  }

  updateSelectedRoom(property: keyof Chambre, value: any) {
    // this.selectedRoom = value;
    // this.showUpdateRoomForm = true;

    if (this.selectedRoom) {
      this.showUpdateRoomForm = true;
      this.selectedRoom[property] = value;
    }
  }

  cancelAddChambre() {
    this.showAddRoomForm = false;
    this.showUpdateRoomForm = false;
    this.showRoomForm = false;
    this.selectedRoom = null;
  }

}

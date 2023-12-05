import { Component, OnInit } from '@angular/core';
import { NgbModal, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';
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
  showAddRoomForm = false;
  showAddRoomFormModel = false;
  showUpdateRoomForm = false;
  showUpdateRoomFormModel = false;
  showRoomForm = false;
  showRoomFormModel=false;

  selectedRoom: SelectedRoom | null = null;

  typeChambreEnum: string[] = Object.values(TypeChambre);

  blocks: Bloc[] = [];

  newRoom: any = {
    numeroChambre: 0,
    typeC: this.typeChambreEnum[0],
    bloc: new Bloc()
  };

  modalOptions: NgbModalOptions = {
    centered: true,
    size: 'sm', // the size can be (sm, md, lg, xl)
  };

  constructor(private chambreService: ChambreService,
    private blocService: BlocService,
    private modalService: NgbModal
  ) { }

  ngOnInit(): void {
    this.loadChambres();
    this.loadBlocs();
  }

  openShowRoomModal(content: any, chambre: any) {
    this.selectedRoom = chambre;
    this.modalService.open(content, this.modalOptions);
  }

  openAddRoomModal(content: any) {
    this.showAddRoomFormModel = true;
    this.modalService.open(content, this.modalOptions);
  }

  openUpdateRoomModal(content: any, chambre: any) {
    this.selectedRoom = chambre;
    this.modalService.open(content, this.modalOptions);
  }

  closeAddRoomModal() {
    this.showAddRoomFormModel = false;
    this.modalService.dismissAll();
  }
  closeUpdateRoomModal() {
    this.showUpdateRoomFormModel = false;
    this.modalService.dismissAll();
  }
  closeShowRoomModal() {
    this.showRoomFormModel = false;
    this.modalService.dismissAll();
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
        this.closeAddRoomModal()

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
      idChambre: this.selectedRoom.idChambre ?? 0,
      numeroChambre: this.selectedRoom.numeroChambre ?? '',
      typeC: this.selectedRoom.typeC ?? TypeChambre,
      bloc: {
        idBloc: this.selectedRoom.bloc?.idBloc ?? 0,
        nomBloc: this.selectedRoom.bloc?.nomBloc ?? '',
      },
    };

    this.chambreService.updateChambre(updatedRoom).subscribe(
      (response) => {
        console.log(`Room with ID ${this.selectedRoom!.idChambre} updated successfully`, response);
        this.loadChambres();
        this.closeUpdateRoomModal();
      },
      (error) => {
        console.error(`Error updating room with ID ${this.selectedRoom!.idChambre}`, error);
      }
    );


  }

  updateSelectedRoom(property: keyof Chambre, value: any) {
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

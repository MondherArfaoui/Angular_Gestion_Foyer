import { Component, OnInit } from '@angular/core';
import { Chambre } from 'src/app/core/models/chambre/chambre';
import { ChambreService } from 'src/app/core/services/chambre/chambre.service';

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

  selectedRoom: Partial<Chambre> | null = null; // Change here


  constructor(private chambreService: ChambreService) { }

  ngOnInit(): void {
    this.loadChambres();
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

  displayChambre(chambreId: number) {
    // Implement logic for displaying the room with ID: chambreId
    console.log(`Displaying chambre with ID: ${chambreId}`);
  }

  deleteChambre(chambreId: number) {
    // Implement logic for deleting the room with ID: chambreId
    console.log(`Deleting chambre with ID: ${chambreId}`);
  }

  updateChambre(chambreId: number) {
    this.showUpdateRoomForm = true;  // Set showRoomForm to true instead of showUpdateRoomForm
  }


  addChambre() {
    this.showAddRoomForm = true;
    this.showUpdateRoomForm = false;
    this.showRoomForm = false;

  }

  cancelAddChambre() {
    this.showAddRoomForm = false;
    this.showUpdateRoomForm = false;
    this.showRoomForm = false;
    this.selectedRoom = null;
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

  // Method to safely update selectedRoom properties
  updateSelectedRoom(property: keyof Chambre, value: any) {
    // this.selectedRoom = value;
    // this.showUpdateRoomForm = true;

    if (this.selectedRoom) {
      this.showUpdateRoomForm = true;
      this.selectedRoom[property] = value;
    }
  }
}

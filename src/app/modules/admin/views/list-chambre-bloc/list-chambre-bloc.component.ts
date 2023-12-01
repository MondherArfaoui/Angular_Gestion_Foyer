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
  showAddRoomForm = false;
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
    // Implement logic for updating the room with ID: chambreId
    console.log(`Updating chambre with ID: ${chambreId}`);
  }


  addChambre() {
    this.showAddRoomForm = true;
  }

  cancelAddChambre() {
    this.showAddRoomForm = false;
    this.selectedRoom = null;
  }

  viewChambreDetails(chambre: any) {
    this.selectedRoom = chambre;
    this.showAddRoomForm = true;
    // this.selectedRoom = this.selectedRoom || {};
    console.log("this.selectedRoom  : ",this.selectedRoom)
  }

  // Method to safely update selectedRoom properties
  updateSelectedRoom(property: keyof Chambre, value: any) {
    if (this.selectedRoom) {
      this.selectedRoom[property] = value;
    }
  }
}

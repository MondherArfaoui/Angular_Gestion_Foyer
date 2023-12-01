import { Component, OnInit } from '@angular/core';
import { Chambre } from 'src/app/core/models/chambre/chambre';
import { ChambreService } from 'src/app/core/services/chambre/chambre.service';

@Component({
  selector: 'app-list-chambre',
  templateUrl: './list-chambre.component.html',
  styleUrls: ['./list-chambre.component.css']
})
export class ListChambreComponent implements OnInit {
  chambres: any[] = [];

  constructor(private chambreService: ChambreService) { }

  ngOnInit(): void {
    this.loadChambres();
  }

  loadChambres() {
    this.chambreService.getAllChambres().subscribe(
      (data: Chambre[]) => {
        this.chambres = data;
        console.log("this.chambres",this.chambres);
      },
      (error) => {
        console.error('Error fetching chambres', error);
      }
    );
  }

  getImageUrl(roomType: string): string {
    switch (roomType) {
      case 'SIMPLE':
        return 'assets/images/chambre/chambre1.jpeg';
      case 'DOUBLE':
        return 'assets/images/chambre/chambre2.jpeg';
      default:
        return 'assets/images/chambre/chambre3.jpeg';
    }
  }

}

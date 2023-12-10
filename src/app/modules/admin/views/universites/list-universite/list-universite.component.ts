import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Universite } from 'src/app/core/models/universite/universite';
import { EtudiantService } from 'src/app/core/services/etudiant/etudiant.service';
import { UniversiteService } from 'src/app/core/services/universite/universite.service';

@Component({
  selector: 'app-list-universite',
  templateUrl: './list-universite.component.html',
  styleUrls: ['./list-universite.component.css']
})
export class ListUniversiteComponent implements OnInit {
  Universites: Universite[] = [];
  listUniversites: Universite[] = [];
  filteredUniversities: Universite[] = [];
  title = 'pagination';
  page: number = 1;
  count: number = 0;
  tableSize: number = 1;
  tableSizes: any = [1, 2, 15, 20];
  searchValue: string = '';

  constructor(
    private universiteservice: UniversiteService,
    private router: Router,
    private uss: ActivatedRoute,
   
  ) {}

  ngOnInit(): void {
    this.allUni();
  }

  allUni() {
    this.universiteservice.getAllUniversites().subscribe((res) => {
      this.listUniversites = res;
      this.filteredUniversities = res;
    });
  }

  updateUniversite(idUniversite: number) {
    this.router.navigate(['admin/universite/putUni', idUniversite]);
  }

  deleteUniv(idUniversite: number) {
    const confirmDelete = window.confirm('Are you sure you want to delete this Universite?');
  
    if (confirmDelete) {
      this.universiteservice.deleteUniversite(idUniversite).subscribe(
        () => {
          this.allUni();
          alert('Universite deleted successfully'); 
        },
        (error) => {
          console.error('Error deleting Universite', error);
          alert('Error deleting Universite'); 
        }
      );
    }
  }
  toadd() {
    this.router.navigate(['/admin/universite/add']);
  }

  postList(): void {
    this.universiteservice.getAllUniversites().subscribe((data: Universite[]) => {
      this.listUniversites = data;
      this.filteredUniversities = data;
    });
  }

  onTableDataChange(event: any): void {
    this.page = event;
    this.postList();
  }

  onTableSizeChange(event: any) {
    this.tableSize = event.target.value;
    this.page = 1;
    this.postList();
  }

  onSearchTextChanged() {
    const searchText = this.searchValue.toLowerCase().trim();

    this.filteredUniversities = this.listUniversites.filter((university) => {
      return (
        university.nomUniversite.toLowerCase().includes(searchText) ||
        university.adresse.toLowerCase().includes(searchText) ||
        university.idUniversite.toString().includes(searchText)
      );
    });

    this.count = this.filteredUniversities.length;
  }
}

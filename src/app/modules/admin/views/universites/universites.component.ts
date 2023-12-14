import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Universite } from 'src/app/core/models/universite/universite';
import { UniversiteService } from 'src/app/core/services/universite/universite.service';

@Component({
  selector: 'app-universites',
  templateUrl: './universites.component.html',
  styleUrls: ['./universites.component.css']
})
export class UniversitesComponent implements OnInit {
  
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

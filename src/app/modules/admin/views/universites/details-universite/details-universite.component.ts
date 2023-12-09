import { Component, OnInit } from '@angular/core';
import { Universite } from 'src/app/core/models/universite/universite';
import { UniversiteService } from 'src/app/core/services/universite/universite.service';

@Component({
  selector: 'app-details-universite',
  templateUrl: './details-universite.component.html',
  styleUrls: ['./details-universite.component.css']
})
export class DetailsUniversiteComponent implements OnInit {

  constructor( private universiteservice:UniversiteService) { }
  currentUniversite: Universite ={
    idUniversite:0,
    nomUniversite:"",
    adresse:"",
   
};

Universites: Universite[] = [];
listUniversites :any ;
currentIndex = -1;
nomUni=""
ngOnInit(): void {
  this.retriveUniversites();
  
}
retriveUniversites():void{
  this.universiteservice.getAllUniversites().subscribe({
    next:(data)=>{
      this.Universites=data;
      console.log(data);
    },
    error: (e) => console.error(e)
  });
}
refreshList(): void {
  this.retriveUniversites();
  this.currentUniversite = {  idUniversite:0,
    nomUniversite:"",
    adresse:"",
    
};
  this.currentIndex = -1;
}

setActiveTutorial(universite: Universite, index: number): void {
  this.currentUniversite = universite;
  this.currentIndex = index;
}
searchText:string='';
  onSearchTextEntered(searchValue:string){
    this.searchText=searchValue
    console.log(this.searchText)
  }
  clearSearch(): void {
    this.searchText = ''; // Clear the search text
  }
  
}

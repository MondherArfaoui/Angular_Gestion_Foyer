import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-universites',
  templateUrl: './universites.component.html',
  styleUrls: ['./universites.component.css']
})
export class UniversitesComponent implements OnInit {
  
  constructor()   {  }


  ngOnInit(): void {
  }
  enteredsearchValue:string="";
  @Output()
  searchTextChanged:EventEmitter<string>=new EventEmitter<string>();
  onSearchTextChanged(){
    this.searchTextChanged.emit(this.enteredsearchValue);
  }


}

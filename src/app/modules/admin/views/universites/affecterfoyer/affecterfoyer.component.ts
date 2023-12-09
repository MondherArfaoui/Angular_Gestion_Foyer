import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Foyer } from 'src/app/core/models/foyer/foyer';
import { Universite } from 'src/app/core/models/universite/universite';
import { FoyerService } from 'src/app/core/services/foyer/foyer.service';
import { UniversiteService } from 'src/app/core/services/universite/universite.service';

@Component({
  selector: 'app-affecterfoyer',
  templateUrl: './affecterfoyer.component.html',
  styleUrls: ['./affecterfoyer.component.css']
})
export class AffecterfoyerComponent implements OnInit {
  foyer!: Foyer[];
  uv!: Universite;

  constructor(private universiteservice: UniversiteService,private foyerservice: FoyerService,private route:ActivatedRoute,private router:Router,private toastr: ToastrService,) {}


  ngOnInit(): void {
    this.foyerservice.getAllFoyers().subscribe(value=>this.foyer=value);
    this.route.params.subscribe(p=>{

      this.getuniversite(p['id'])
    })
  }
  goBack() {
        
    this.router.navigate(['/admin/universite/universite']); 
  }
  getuniversite(id :number){
    this. universiteservice.getUniversiteById(id).subscribe((data:any)=>this.uv=data)

  }

  affecterFoyer(idFoyer: number) {
    this.universiteservice.affecterFoyerAUniversite(idFoyer, this.uv.nomUniversite.toString()).subscribe(
      () => {
        this.router.navigate(['/admin/universite/add']);
        this.toastr.success('Foyer assigned to University successfully', 'Success');
      },
      (error) => {
        this.toastr.error('Error assigning Foyer to University', 'Error');
      }
    );
  }
  
      
  desaffecterFoyer() {
    this.universiteservice.desaffecterFoyerAUniversite(this.uv.idUniversite).subscribe(
      () => {
        this.toastr.success('Foyer removed from University successfully', 'Success');
        // Add any logic you need after desaffecting the foyer
      },
      (error) => {
        this.toastr.error('Error removing Foyer from University', 'Error');
      }
    );
  }
}


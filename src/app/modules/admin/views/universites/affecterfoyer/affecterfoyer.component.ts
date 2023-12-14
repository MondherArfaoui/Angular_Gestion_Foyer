import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Foyer } from 'src/app/core/models/foyer/foyer';
import { Universite } from 'src/app/core/models/universite/universite';
import { FoyerService } from 'src/app/core/services/foyer/foyer.service';
import { UniversiteService } from 'src/app/core/services/universite/universite.service';
import Swal from 'sweetalert2';

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
        Swal.fire({
          icon: 'success',
          title: 'Success',
          text: 'Foyer assigned to University successfully!',
          timer: 2000  // 2 seconds
        });
        setTimeout(() => {
          location.reload();
        }, 2000);  // Wait for the notification to be visible for 2 seconds before reloading
      },
      (error) => {
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'Error assigning Foyer to University',
          timer: 2000  // 2 seconds
        });
      }
    );
  }

  desaffecterFoyer() {
    this.universiteservice.desaffecterFoyerAUniversite(this.uv.idUniversite).subscribe(
      () => {
        Swal.fire({
          icon: 'success',
          title: 'Success',
          text: 'Foyer removed from University successfully!',
          timer: 2000  // 2 seconds
        });
        setTimeout(() => {
          location.reload();
        }, 2000);  // Wait for the notification to be visible for 2 seconds before reloading
      },
      (error) => {
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'Error removing Foyer from University',
          timer: 2000  // 2 seconds
        });
      }
    );
  }

}


import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute, Router } from '@angular/router';
import { Universite } from 'src/app/core/models/universite/universite';
import { UniversiteService } from 'src/app/core/services/universite/universite.service';


@Component({
  selector: 'app-create-universite',
  templateUrl: './create-universite.component.html',
  styleUrls: ['./create-universite.component.css']
})
export class CreateUniversiteComponent implements OnInit {
  listUniversite: Universite[] = [];
  action: string = '';
  universite: Universite = new Universite();
 

  constructor(
    private toastr: ToastrService,
    private universiteservice: UniversiteService,
    private router: Router,
    private currentRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
   

    let id = this.currentRoute.snapshot.params['id'];

    if (id != null) {
      // update
      this.action = 'Update';
      this.universiteservice.getUniversiteById(id).subscribe((data: Universite) => {
        this.universite = data;
      });
    } else {
      // add
      this.action = 'Add';
      this.universite = new Universite();
    }

    // get
    this.universiteservice.getAllUniversites().subscribe((data: Universite[]) => {
      this.listUniversite = data;
    });
  }
      add() {
        if (this.action == 'update') {
        
          this.universiteservice
          
            .updateUniversite(this.universite)
            .subscribe(() => console.log('complete'));
            this.toastr.success('University added successfully', 'Success')

           
        } else {
          
          console.log('this.universite:', this.universite);
          this.toastr.success('University added successfully', 'Success');
          this.universiteservice.addUniversite(this.universite).subscribe((result) => {
           
            if (result) {
              this.toastr.success('University added successfully', 'Success');
             
              this.listUniversite = [this.universite, ...this.listUniversite];
            
              location.reload();
            }
          });
        }
        
              
        
      }
      goBack() {
        
        this.router.navigate(['/admin/universite/universite']); 
      }
    
      //delete
      delete() {
        this.universiteservice.deleteUniversite(this.universite.idUniversite);
        this.toastr.success('University added successfully', 'Success');
      }
    
affecterFoyer(idFoyer: number) {
  this.universiteservice.affecterFoyerAUniversite(idFoyer, this.universite.idUniversite.toString()).subscribe(
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
  this.universiteservice.desaffecterFoyerAUniversite(this.universite.idUniversite).subscribe(
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

import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute, Router } from '@angular/router';
import { Universite } from 'src/app/core/models/universite/universite';
import { UniversiteService } from 'src/app/core/services/universite/universite.service';
import Swal from 'sweetalert2';


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
      this.universiteservice.updateUniversite(this.universite).subscribe(() => {
        console.log('complete');
        Swal.fire({
          icon: 'success',
          title: 'Success',
          text: 'University updated successfully!',
          timer: 2000  // 2 seconds
        });
        setTimeout(() => {
          location.reload();
        }, 2000);  // Wait for the notification to be visible for 2 seconds before reloading
      });
    } else {
      console.log('this.universite:', this.universite);
      this.universiteservice.addUniversite(this.universite).subscribe((result) => {
        if (result) {
          Swal.fire({
            icon: 'success',
            title: 'Success',
            text: 'University added successfully!',
            timer: 2000  // 2 seconds
          });
          setTimeout(() => {
            this.listUniversite = [this.universite, ...this.listUniversite];
            location.reload();
          }, 2000);  // Wait for the notification to be visible for 2 seconds before reloading
        }
      });
    }
  }
     
      goBack() {
        
        this.router.navigate(['/admin/universite/universite']); 
      }
    

    }

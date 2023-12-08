import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Foyer } from 'src/app/core/models/foyer/foyer';
import { Universite } from 'src/app/core/models/universite/universite';
import { FoyerService } from 'src/app/core/services/foyer/foyer.service';
import { UniversiteService } from 'src/app/core/services/universite/universite.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-list-universite',
  templateUrl: './list-universite.component.html',
  styleUrls: ['./list-universite.component.css']
})
export class ListUniversiteComponent {

  constructor(private formBuilder: FormBuilder, private universiteService: UniversiteService, private foyerService:FoyerService) { }

  listUniversite: Universite[] = [];
  foyer!:Foyer;
  selectedUniversite: Universite | null = null;
  selectedFoyerId: number | null = null;
  UniversiteForm!: FormGroup;
  rechercheUniversite: string = '';
  listFoyerWithoutUniversite: Foyer[] = [];

  ngOnInit() {
    this.getAllUniversites();
    this.getFoyersWithoutUniversite();
    this.UniversiteForm = this.formBuilder.group({
      nomUniversite: ['', Validators.required],
      adresse: ['', Validators.required]
    });
  }

  getAllUniversites() {
    this.universiteService.getAllUniversites().subscribe((res: Universite[]) => {
      this.listUniversite = res;
      this.listUniversite.forEach(universite => {
        this.foyerService.getFoyerByIdUniversite(universite.idUniversite).subscribe(
          (foyer) => {
            universite.foyer = foyer;
          },
          (error) => {
            // Si aucun foyer n'est trouvé ou en cas d'erreur
            universite.foyer = {
              idFoyer: -1, // Une valeur qui indique clairement qu'il n'y a pas de foyer associé
              capaciteFoyer: 0,
              universite: universite,
              nomFoyer: 'Non associé'
            };
          }
        );
      });
    });
  }

  ajouerUniversite() {
    if (this.UniversiteForm.valid) {
      this.universiteService.addUniversite(this.UniversiteForm.value).subscribe((res) => {
        const Toast = Swal.mixin({
          toast: true,
          position: 'top-end',
          showConfirmButton: false,
          timer: 1500,
          timerProgressBar: true,
          didOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer)
            toast.addEventListener('mouseleave', Swal.resumeTimer)
          }
        })
        
        Toast.fire({
          icon: 'success',
          title: 'L\'université a été ajoutée avec succès'
        })

        this.getAllUniversites();
        this.UniversiteForm.reset();
      });
    }
  }

  openEditModal(universite: Universite) {
    this.selectedUniversite = universite;
    this.UniversiteForm.setValue({
      nomUniversite: universite.nomUniversite,
      adresse: universite.adresse
    });
  }

  updateUniversite() {
    if (this.UniversiteForm.valid && this.selectedUniversite) {
      const updatedUniversite: Universite = {
        ...this.selectedUniversite,
        ...this.UniversiteForm.value
      };

      this.universiteService.updateUniversite(updatedUniversite).subscribe((res) => {
        const Toast = Swal.mixin({
          toast: true,
          position: 'top-end',
          showConfirmButton: false,
          timer: 1500,
          timerProgressBar: true,
          didOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer)
            toast.addEventListener('mouseleave', Swal.resumeTimer)
          }
        })
        
        Toast.fire({
          icon: 'success',
          title: 'L\'université a été modifiée avec succès'
        })
        this.getAllUniversites();
      });
    }
  }

  getFoyersWithoutUniversite() {
    this.foyerService.getFoyersWithoutUniversite().subscribe((res: Foyer[]) => {
      this.listFoyerWithoutUniversite = res;
    });
  }

  openAffectModal(universite: Universite) {
    this.selectedUniversite = universite;
    this.selectedFoyerId = null;
  }

  affecterFoyerAUniversite() {
    if (this.selectedFoyerId !== null && this.selectedUniversite !== null) {
      this.universiteService.affecterFoyerAUniversite(this.selectedFoyerId, this.selectedUniversite.nomUniversite).subscribe((res: any) => {
        const Toast = Swal.mixin({
          toast: true,
          position: 'top-end',
          showConfirmButton: false,
          timer: 1500,
          timerProgressBar: true,
          didOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer)
            toast.addEventListener('mouseleave', Swal.resumeTimer)
          }
        })
        
        Toast.fire({
          icon: 'success',
          title: 'Le foyer a été affecté avec succès'
        })
        this.getAllUniversites();
      });
    } else {
      console.error('Foyer ID or Université is not selected');
    }
  }
  

  desaffecterFoyerAUniversite(idUniversite:number){
    this.universiteService.desaffecterFoyerAUniversite(idUniversite).subscribe((res:any) => {
      const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 1500,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener('mouseenter', Swal.stopTimer)
          toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
      })
      
      Toast.fire({
        icon: 'success',
        title: 'Le foyer a été désaffecté avec succès'
      })

    this.getAllUniversites()
    })
  }
  
  deleteUniversite(id:number){
    this.universiteService.deleteUniversite(id).subscribe((res:any) => {

        const Toast = Swal.mixin({
          toast: true,
          position: 'top-end',
          showConfirmButton: false,
          timer: 1500,
          timerProgressBar: true,
          didOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer)
            toast.addEventListener('mouseleave', Swal.resumeTimer)
          }
        })
        
        Toast.fire({
          icon: 'success',
          title: 'L\'université a été supprimée avec succès'
        })

      this.getAllUniversites()
    })
  }

}

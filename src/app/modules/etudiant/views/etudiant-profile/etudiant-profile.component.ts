import { formatDate } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Etudiant } from 'src/app/core/models/etudiant/etudiant';
import { Universite } from 'src/app/core/models/universite/universite';
import { EtudiantService } from 'src/app/core/services/etudiant/etudiant.service';
import { UniversiteService } from 'src/app/core/services/universite/universite.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-etudiant-profile',
  templateUrl: './etudiant-profile.component.html',
  styleUrls: ['./etudiant-profile.component.css']
})
export class EtudiantProfileComponent implements OnInit {

  userconnect = JSON.parse(localStorage.getItem("userconnect")!);
  etudiant!: Etudiant;
  listUniversite: Universite[] = [];
  fileToUpload: Array<File> = [];

  updateForm: FormGroup;

  constructor(private etudiantService: EtudiantService, private formBuilder: FormBuilder, private universiteService: UniversiteService) {
    this.updateForm = this.formBuilder.group({
      nom: ['', [Validators.required, Validators.minLength(3)]],
      prenom: ['', Validators.required],
      image: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
      cin: [0, Validators.required],
      universite: ['', Validators.required],
      dateNaissance: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.userconnect;
    this.getOneEtudiant();
    this.getAllUniversites();
  }

  getOneEtudiant() {
    this.etudiantService.getOneEtudiant(this.userconnect.id).subscribe(data => {
      this.etudiant = data;
      
      this.updateForm.patchValue({
        nom: this.etudiant.nom,
        prenom: this.etudiant.prenom,
        image: this.etudiant.image,
        email: this.etudiant.email,
        cin: this.etudiant.cin,
        universite: this.etudiant.universite.idUniversite,
        dateNaissance: this.formatDateNaissance(this.etudiant.dateNaissance)
      });
    });
  }

  private formatDateNaissance(date: any): string {
    if (date instanceof Date) {
      // If it's a Date object, format it
      return formatDate(date, 'yyyy-MM-dd', 'en');
    } else if (typeof date === 'string') {
      // If it's already a string, you might want to validate or reformat it
      return date; // Or apply formatting if necessary
    } else {
      // Handle unexpected formats, or set a default value
      console.error('Unexpected date format', date);
      return ''; // or some default value
    }
  }

  getAllUniversites() {
    this.universiteService.getAllUniversites().subscribe((data: Universite[]) => {
      this.listUniversite = data;
    });
  }

  updateEtudiant() {
    if (this.updateForm.valid) {
      const updatedEtudiant: Etudiant = {
        ...this.etudiant,
        ...this.updateForm.value
      };

      this.etudiantService.updateEtudiant(updatedEtudiant).subscribe(res => {
        Swal.fire({
          icon: 'success',
          title: 'Information modifiée avec succès',
          showConfirmButton: false,
          timer: 3000
        });
        localStorage.setItem('userconnect', JSON.stringify(res));
        setTimeout(() => {
          window.location.href = "http://localhost:4200/etudiant/etudiant-profile";
        }, 3000);
      }, error => {
        Swal.fire({
          icon: 'error',
          title: 'Erreur lors de la mise à jour',
          text: error.message
        });
      });
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Invalid Form',
        text: 'Please check your form for errors'
      });
    }
  }

  updatePassword() {
    this.etudiantService.updatePassword(this.userconnect.id, this.updateForm.value.password).subscribe(res => {
      const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 1000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener('mouseenter', Swal.stopTimer)
          toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
      });

      Toast.fire({
        icon: 'success',
        title: 'Mot de passe modifié avec succès'
      });

      localStorage.setItem('userconnect', JSON.stringify(res));
      setTimeout(() => {
        window.location.href = "http://localhost:4200/etudiant/etudiant-profile";
      }, 1000);
    }, error => {
      Swal.fire({
        icon: 'error',
        title: 'Erreur',
        text: 'Erreur lors de la modification du mot de passe'
      });
    });
  }

  handleFileInput(files:any){
    this.fileToUpload=<Array<File>>files.target.files;
  }

  updateImgEtudiant() {
    let formData = new FormData();
    formData.append("image", this.fileToUpload[0]);

    this.etudiantService.updateImage(this.userconnect.id, formData).subscribe(res => {
      const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 750,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener('mouseenter', Swal.stopTimer)
          toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
      });
      
      Toast.fire({
        icon: 'success',
        title: 'Image modifiée avec succès'
      });

      localStorage.setItem('userconnect', JSON.stringify(res));
      setTimeout(() => {
        window.location.href = "http://localhost:4200/etudiant/etudiant-profile";
      }, 750);
    }, err => {
      const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 1000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener('mouseenter', Swal.stopTimer)
          toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
      });

      Toast.fire({
        icon: 'error',
        title: 'Erreur lors de la mise à jour de l\'image'
      });
    });
  }
}
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationService } from 'src/app/core/services/authentication/authentication.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent {

  passwordResetToken=this.activeroute.snapshot.params['passwordResetToken'];

  resetForm = new FormGroup({
    newPassword: new FormControl('', [Validators.required, Validators.minLength(6)])
  });

  constructor(private router: Router, private authenticationService: AuthenticationService, private activeroute:ActivatedRoute) { }

  resetPassword() {
    const newPassword = this.resetForm.get('newPassword')?.value ?? '';

    if (newPassword) {
      this.authenticationService.resetPassword(this.passwordResetToken, newPassword).subscribe((res: any) => {
        const Toast = Swal.mixin({
          toast: true,
          position: 'top-end',
          showConfirmButton: false,
          timer: 1000,
          timerProgressBar: true,
          didOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer);
            toast.addEventListener('mouseleave', Swal.resumeTimer);
          }
        });
        
        Toast.fire({
          icon: 'success',
          title: 'Mot de passe réinitialisé avec succès'
        })
        window.setTimeout(function() {
          window.location.href="http://localhost:4200/signin"
      }, 1000);
      });
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Erreur',
        text: 'Veuillez entrer une mot de passe valide.'
      });
    }
  }

}

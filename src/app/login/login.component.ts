import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { first } from 'rxjs';
import { Mensaje } from '../_models/Mensaje';
import { AlertService } from '../_services/alert.service';
import { AuthenticationService } from '../_services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  loading = false;
  submitted = false;
  returnUrl: string="";
  verDlgFormRecuperarContrasenia: Boolean = false;
  verDlgEnvioCorreo: Boolean = false;
  verDlgMsgEnvioCorreo: Boolean = false;
  mensajeRecuperacionContrasenia: Mensaje = new Mensaje();

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthenticationService,
    private alertService: AlertService) {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });

    // reset login status
    this.authenticationService.logout();

    // get return url from route parameters or default to '/'
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    }

  ngOnInit() {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });

    // reset login status
    this.authenticationService.logout();
  }

  // convenience getter for easy access to form fields
  get username() { return this.loginForm.get('username'); }
  get password() { return this.loginForm.get('password'); }

  onSubmit() {
    console.log("Mensaje de ingreso")
    this.submitted = true;

    // stop here if form is invalid
    if (this.loginForm.invalid) {
      return;
    }

    this.loading = true;
    var lUsuario = {
      username: this.username?.value,
      password: this.password?.value
    };
    this.authenticationService.login(lUsuario).pipe(first()).subscribe({
      next: data => {this.router.navigate([this.returnUrl + '/datos-basicos-cliente']); },
      error: data =>{
        this.alertService.error(data);
        this.loading = false;
      }
    });
  }

  prepararRecuperarContrasenia() {
    this.verDlgFormRecuperarContrasenia = true;
  }

  cancelarRecuperarContrasenia() {
    this.verDlgFormRecuperarContrasenia = false;
  }

  aceptarEnvioContrasenia() {
    this.verDlgMsgEnvioCorreo = false;
    this.mensajeRecuperacionContrasenia = new Mensaje();
  }
}
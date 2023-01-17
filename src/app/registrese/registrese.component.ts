import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { RegistreseService } from '../registrese.service';
import { AlertService } from '../_services';
import { ValidacionesPersonalizadas } from '../_validadores/ValidacionesPersonalizadas';

@Component({
  selector: 'app-registrese',
  templateUrl: './registrese.component.html',
  styleUrls: ['./registrese.component.sass'],
  providers: [MessageService]
})
export class RegistreseComponent {
  formReg: FormGroup;
  loading = false;
  submitted = false;
  returnUrl: string;
  constructor(
      private fb: FormBuilder,
      private router: Router,
      private route: ActivatedRoute,
      private registreseService: RegistreseService,
      private alertService: AlertService,
      private messageService: MessageService) {
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  
        this.formReg = this.fb.group({
            correo: ['', [Validators.required, Validators.email]],
            nombreUsuario: ['', [Validators.required]],
            contrasenia: ['', Validators.required]
        });
  }


  onSubmit() {
      this.submitted = true;
      if (this.formReg.invalid) {
          return;
      }
      this.loading = true;
      this.registreseService.registro(this.formReg.value)
      .subscribe({
        next: data => {
          this.messageService.clear();
          this.messageService.add({ key: 'msgGuardado', sticky: true, severity: "Datos guardados correctamente", summary: "Datos guardados correctamente", detail: "Datos guardados correctamente", closable: false });
        },
        error: data => {
          this.messageService.clear();
          this.messageService.add({ key: 'msgGuardado', sticky: true, severity: data.tipo, summary: data.resumen, detail: data.contenido, closable: false });
        }
      });
  }

  aceptarRegistro() {
      this.router.navigate([this.returnUrl + '/login']);
  }

  aceptarMsgCambioContrasenia() {

  }
}

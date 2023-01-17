import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MessageService, SelectItem } from 'primeng/api';
import { PuertoService } from '../puerto.service';

@Component({
  selector: 'app-puerto',
  templateUrl: './puerto.component.html',
  styleUrls: ['./puerto.component.sass'],
  providers: [MessageService]
})
export class PuertoComponent {
  formPuertos: FormGroup;
  loading = false;
  es: any;
  puertos: any[] = [];
  paises: SelectItem[] = [];
  constructor(private fb: FormBuilder, private pueService: PuertoService,
    private messageService: MessageService) {
    this.formPuertos = this.fb.group({
      nombre: ['', Validators.required],
      ubicacion: ['', Validators.required],
      idPais: ['', Validators.required],
    });
  }
  // convenience getter for easy access to form fields
  get nombre() { return this.formPuertos.get('nombre'); }
  get direccion() { return this.formPuertos.get('direccion'); }
  get idPais() { return this.formPuertos.get('idPais'); }

  ngOnInit() {
    this.inicializarValidaciones();
    this.listar();
    this.listarPaises();
  }

  inicializarValidaciones() {
    this.formPuertos = this.fb.group({
      nombre: ['', Validators.required],
      ubicacion: ['', Validators.required],
      idPais: ['', Validators.required],
    });
  }

  onSubmit() {
    
    if (this.formPuertos.invalid) {
      return;
    }
    this.loading = true;
    this.pueService.guardar(this.formPuertos.value)
      .subscribe({
        next: data => {
        },
        error: data => {
          this.messageService.clear();
          this.messageService.add({ key: 'msgGuardado', sticky: true, severity: "Datos guardados correctamente", summary: "Datos guardados correctamente", detail: "Datos guardados correctamente", closable: false });
          this.loading = false;
          this.inicializarValidaciones();
          this.listar();
        }
      });
  }

  aceptarRegistro() {
    this.messageService.clear();
  }

  listar() {
    this.pueService.listar().subscribe(puertos => this.puertos = puertos);
  }
  listarPaises(){
    this.pueService.listarPaises().subscribe(paises => this.paises = paises);
  }
}

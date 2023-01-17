import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MessageService, SelectItem } from 'primeng/api';
import { BodegaService } from '../_services/bodega.service';

@Component({
  selector: 'app-bodegas',
  templateUrl: './bodegas.component.html',
  styleUrls: ['./bodegas.component.sass'],
  providers: [MessageService]
})
export class BodegasComponent {
  formBodegas: FormGroup;
  loading = false;
  es: any;
  bodegas: any[] = [];
  paises: SelectItem[] = [];
  constructor(private fb: FormBuilder, private bodService: BodegaService,
    private messageService: MessageService) {
    this.formBodegas = this.fb.group({
      nombre: ['', Validators.required],
      direccion: ['', Validators.required],
      idPais: ['', Validators.required],
    });
  }
  // convenience getter for easy access to form fields
  get nombre() { return this.formBodegas.get('nombre'); }
  get direccion() { return this.formBodegas.get('direccion'); }
  get idPais() { return this.formBodegas.get('idPais'); }

  ngOnInit() {
    this.inicializarValidaciones();
    this.listar();
    this.listarPaises();
  }

  inicializarValidaciones() {
    this.formBodegas = this.fb.group({
      nombre: ['', Validators.required],
      direccion: ['', Validators.required],
      idPais: ['', Validators.required],
    });
  }

  onSubmit() {
    
    if (this.formBodegas.invalid) {
      return;
    }
    this.loading = true;
    this.bodService.guardar(this.formBodegas.value)
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
    this.bodService.listar().subscribe(productos => this.bodegas = productos);
  }
  listarPaises(){
    this.bodService.listarPaises().subscribe(paises => this.paises = paises);
  }
}

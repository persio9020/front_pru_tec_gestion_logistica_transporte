import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MessageService, SelectItem } from 'primeng/api';
import { TiposProductoService } from '../_services/tipos-producto.service';

@Component({
  selector: 'app-tipos-productos',
  templateUrl: './tipos-productos.component.html',
  styleUrls: ['./tipos-productos.component.sass'],
  providers: [MessageService]
})
export class TiposProductosComponent {
  formTipoProd: FormGroup;
  loading = false;
  es: any;
  tiposProductos: any[] = [];
  constructor(private fb: FormBuilder, private prodService: TiposProductoService,
    private messageService: MessageService) {
    this.formTipoProd = this.fb.group({
      nombre: ['', Validators.required]
    });
  }
  // convenience getter for easy access to form fields
  get nombre() { return this.formTipoProd.get('nombre'); }

  ngOnInit() {
    this.inicializarValidaciones();
    this.listar();
  }

  inicializarValidaciones() {
    this.formTipoProd = this.fb.group({
      nombre: ['', Validators.required]
    });
  }

  onSubmit() {
    
    if (this.formTipoProd.invalid) {
      return;
    }
    this.loading = true;
    this.prodService.guardar(this.formTipoProd.value)
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
    this.prodService.listar().subscribe(productos => this.tiposProductos = productos);
  }
}

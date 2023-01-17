import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import * as moment from 'moment';
import { MessageService, SelectItem } from 'primeng/api';
import { BodegaService } from '../_services/bodega.service';
import { ClienteService } from '../_services/cliente.service';
import { PlanEntregaTerrestreService } from '../_services/plan-entrega-terrestre.service';
import { TipoProductoSelectService } from '../_services/tipo-producto-select.service';

@Component({
  selector: 'app-planes-entrega-terrestre',
  templateUrl: './planes-entrega-terrestre.component.html',
  styleUrls: ['./planes-entrega-terrestre.component.sass'],
  providers: [MessageService]
})
export class PlanesEntregaTerrestreComponent {
  formPlanEntrega: FormGroup;
  planesEntrega: any[] = [];
  tiposProducto: SelectItem[] = [];
  clientes: SelectItem[] = [];
  bodegas: SelectItem[] = [];
  loading = false;
  es: any;
  submitted = false;
  constructor(private fb: FormBuilder, private dpuService: PlanEntregaTerrestreService,
    private tsproductoService: TipoProductoSelectService, private clientesService: ClienteService,
    private bodegaService: BodegaService, private messageService: MessageService) {
    this.es = {
      firstDayOfWeek: 1,
      dayNames: ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"],
      dayNamesShort: ["dom", "lun", "mar", "mié", "jue", "vie", "sáb"],
      dayNamesMin: ["D", "L", "M", "X", "J", "V", "S"],
      monthNames: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"],
      monthNamesShort: ["ene", "feb", "mar", "abr", "may", "jun", "jul", "ago", "sep", "oct", "nov", "dic"],
      today: 'Hoy',
      clear: 'Borrar'
    }
    this.formPlanEntrega = this.fb.group({
      idTipoProducto: ['', Validators.required],
      idCliente: ['', Validators.required],
      cantidad: ['', Validators.required],
      fechaEntrega: ['', Validators.required],
      idBodegaEntrega: ['', Validators.required],
      precioEnvio: ['', Validators.required],
      placaVehiculo: ['',[Validators.required,
        Validators.minLength(6),
        Validators.maxLength(6),
        Validators.pattern(/^[a-zA-Z]{3}[0-9]{3}$/)] ],
      numeroGuia: ['', [Validators.required,
        Validators.minLength(10),
        Validators.maxLength(10)]]
    });
  }

  get f(): { [key: string]: AbstractControl } {
    return this.formPlanEntrega.controls;
  }
  ngOnInit() {
    this.tsproductoService.listarOptions().subscribe(tiposProducto => this.tiposProducto = tiposProducto);
    this.clientesService.listarOptions().subscribe(clientes => this.clientes = clientes);
    this.bodegaService.listarOptions().subscribe(bodegas => this.bodegas = bodegas);
    this.listar();
  }

  inicializarValidaciones() {
    this.formPlanEntrega = this.fb.group({
      idTipoProducto: ['', Validators.required],
      idCliente: ['', Validators.required],
      cantidad: ['', Validators.required],
      fechaEntrega: ['', Validators.required],
      idBodegaEntrega: ['', Validators.required],
      precioEnvio: ['', Validators.required],
      placaVehiculo: ['',[Validators.required,
        Validators.minLength(6),
        Validators.maxLength(6),
        Validators.pattern(/^[a-zA-Z]{3}[0-9]{3}$/)] ],
      numeroGuia: ['', [Validators.required,
        Validators.minLength(10),
        Validators.maxLength(10)]]
    });
  }

  onSubmit() {
    this.submitted = true;
    if (this.formPlanEntrega.invalid) {
      return;
    }
    this.loading = true;
    let datosBasicos = this.formPlanEntrega.value;
    datosBasicos.fechaEntrega = moment(datosBasicos.fechaEntrega, 'DD/MM/YYYY').toISOString();
    this.dpuService.guardar(this.formPlanEntrega.value)
      .subscribe({
        next: data => {
        },
        error: data => {
          this.messageService.clear();
          this.messageService.add({ key: 'msgGuardado', sticky: true, severity: "Datos guardados correctamente", summary: "Datos guardados correctamente", detail: "Datos guardados correctamente", closable: false });
          this.loading = false;
          this.inicializarValidaciones();
          this.listar();
          this.submitted = false;
        }
      });
  }

  aceptarRegistro() {
    this.messageService.clear();
  }

  listar() {
    this.dpuService.listar().subscribe(planesEntrega => this.planesEntrega = planesEntrega);
  }
}

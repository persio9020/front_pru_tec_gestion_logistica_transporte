import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import * as moment from 'moment';
import { MessageService, SelectItem } from 'primeng/api';
import { PuertoService } from '../puerto.service';
import { ClienteService } from '../_services/cliente.service';
import { PlanEntregaMaritimoService } from '../_services/plan-entrega-maritimo.service';
import { TipoProductoSelectService } from '../_services/tipo-producto-select.service';

@Component({
  selector: 'app-planes-entrega-maritimo',
  templateUrl: './planes-entrega-maritimo.component.html',
  styleUrls: ['./planes-entrega-maritimo.component.sass'],
  providers: [MessageService]
})
export class PlanesEntregaMaritimoComponent {
  formPlanEntrega: FormGroup;
  planesEntrega: any[] = [];
  tiposProducto: SelectItem[] = [];
  clientes: SelectItem[] = [];
  puertos: SelectItem[] = [];
  loading = false;
  es: any;
  submitted = false;
  constructor(private fb: FormBuilder, private dpuService: PlanEntregaMaritimoService,
    private tsproductoService: TipoProductoSelectService, private clientesService: ClienteService,
    private puertoService: PuertoService, private messageService: MessageService) {
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
      idPuertoEntrega: ['', Validators.required],
      precioEnvio: ['', Validators.required],
      numeroFlota: ['',[Validators.required,
        Validators.minLength(8),
        Validators.maxLength(8),
        Validators.pattern(/^[a-zA-Z]{3}[0-9]{4}[a-zA-Z]{1}$/)] ],
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
    this.puertoService.listarOptions().subscribe(puertos => this.puertos = puertos);
    this.listar();
  }

  inicializarValidaciones() {
    this.formPlanEntrega = this.fb.group({
      idTipoProducto: ['', Validators.required],
      idCliente: ['', Validators.required],
      cantidad: ['', Validators.required],
      fechaEntrega: ['', Validators.required],
      idPuertoEntrega: ['', Validators.required],
      precioEnvio: ['', Validators.required],
      placaVehiculo: ['',[Validators.required,
        Validators.minLength(8),
        Validators.maxLength(8),
        Validators.pattern(/^[a-zA-Z]{3}[0-9]{4}[a-zA-Z]{1}$/)] ],
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

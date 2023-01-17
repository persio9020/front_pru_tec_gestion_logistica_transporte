import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MessageService, SelectItem } from 'primeng/api';
import * as moment from 'moment';
import { ClienteService } from '../_services/cliente.service';
@Component({
  selector: 'app-datos-basicos-cliente',
  templateUrl: './datos-basicos-cliente.component.html',
  styleUrls: ['./datos-basicos-cliente.component.sass'],
  providers: [MessageService]
})
export class DatosBasicosClienteComponent {
  formDatoBasicos: FormGroup;
  tiposIdentificacion: SelectItem[] = [];
  fechaMaximaPermitidaEdad: Date;
  fechaMininimaPermitidaEdad: Date;
  sexos: SelectItem[] = [];
  loading = false;
  es: any;
  clientes: any[] = [];
  constructor(private fb: FormBuilder, private dpuService: ClienteService,
    private messageService: MessageService) {
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
    this.fechaMaximaPermitidaEdad = new Date();
    this.fechaMaximaPermitidaEdad.setMonth(this.fechaMaximaPermitidaEdad.getMonth() - (12 * 8));
    this.fechaMininimaPermitidaEdad = new Date();
    this.fechaMininimaPermitidaEdad.setMonth(this.fechaMininimaPermitidaEdad.getMonth() - (12 * 120));
    this.formDatoBasicos = this.fb.group({
      nombres: ['', Validators.required],
      apellidos: ['', Validators.required],
      identificacion: '',
      idTipoIdentificacion: ['', Validators.required],
      fechaNacimiento: ['', Validators.required],
      idSexo: ['', Validators.required],
      telefono: '',
      celular: ['', Validators.required],
      direccion: ['', Validators.required],
      correo: ['', [Validators.required, Validators.email]]
    });
  }
  // convenience getter for easy access to form fields
  get nombres() { return this.formDatoBasicos.get('username'); }
  get apellidos() { return this.formDatoBasicos.get('apellidos'); }
  get identificacion() { return this.formDatoBasicos.get('identificacion'); }
  get idTipoIdentificacion() { return this.formDatoBasicos.get('idTipoIdentificacion'); }
  get fechaNacimiento() { return this.formDatoBasicos.get('fechaNacimiento'); }
  get idSexo() { return this.formDatoBasicos.get('idSexo'); }
  get telefono() { return this.formDatoBasicos.get('telefono'); }
  get celular() { return this.formDatoBasicos.get('celular'); }
  get direccion() { return this.formDatoBasicos.get('direccion'); }
  get correo() { return this.formDatoBasicos.get('correo'); }

  ngOnInit() {
    this.inicializarValidaciones();
    this.dpuService.listarTiposIdentificacion().subscribe(tiposIdentificacion => this.tiposIdentificacion = tiposIdentificacion);
    this.dpuService.listarSexos().subscribe(sexos => this.sexos = sexos);
    this.listar();
  }

  inicializarValidaciones() {
    this.formDatoBasicos = this.fb.group({
      nombres: ['', Validators.required],
      apellidos: ['', Validators.required],
      identificacion: '',
      idTipoIdentificacion: ['', Validators.required],
      fechaNacimiento: ['', Validators.required],
      idSexo: ['', Validators.required],
      telefono: '',
      celular: ['', Validators.required],
      direccion: ['', Validators.required],
      correo: ['', [Validators.required, Validators.email]]
    });
  }

  onSubmit() {
    
    if (this.formDatoBasicos.invalid) {
      return;
    }
    this.loading = true;
    let datosBasicos = this.formDatoBasicos.value;
    datosBasicos.fechaNacimiento = moment(datosBasicos.fechaNacimiento, 'DD/MM/YYYY').toISOString();
    this.dpuService.guardar(this.formDatoBasicos.value)
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
    this.dpuService.listar().subscribe(clientes => this.clientes = clientes);
  }
}

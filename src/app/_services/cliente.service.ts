import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SelectItem } from 'primeng/api';
import { Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  constructor(private http: HttpClient) { }
  listarOptions(): Observable<SelectItem[]> {
    return this.http.get<SelectItem[]>(`${environment.apiUrl}/cliente/listar-options`);
  }

  listarTiposIdentificacion(): Observable<SelectItem[]> {
    return of([{ label: 'Seleccione', value: null }, { label: 'Cedula de ciudadania', value: 1 },
    { label: 'Targeta de identidad', value: 2 },
    { label: 'Pasaporte', value: 3 },
    { label: 'Cédula de extranjería', value: 4 }]);
  }

  listarSexos(): Observable<SelectItem[]> {
    return of([{ label: 'Seleccione', value: null }, { label: 'Hombre', value: 1 }, { label: 'Mujer', value: 2 }]);
  }

  guardar(dp: any): Observable<String> {
    return this.http.post<String>(`${environment.apiUrl}/cliente/agregar`, dp);
  }

  listar(): Observable<any> {
    return this.http.get<any[]>(`${environment.apiUrl}/cliente/listar`);
  }
}

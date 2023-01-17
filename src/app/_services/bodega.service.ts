import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SelectItem } from 'primeng/api';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BodegaService {

  constructor(private http: HttpClient) { }

  guardar(dp: any): Observable<String> {
    return this.http.post<String>(`${environment.apiUrl}/bodega/agregar`, dp);
  }

  listar(): Observable<any> {
    return this.http.get<any[]>(`${environment.apiUrl}/bodega/listar`);
  }

  listarPaises(): Observable<SelectItem[]> {
    return this.http.get<SelectItem[]>(`${environment.apiUrl}/pais/listar`)
  }

  listarOptions(): Observable<SelectItem[]> {
    return this.http.get<SelectItem[]>(`${environment.apiUrl}/bodega/listar-options`);
  }
}

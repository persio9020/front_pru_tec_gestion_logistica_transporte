import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SelectItem } from 'primeng/api';
import { Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PlanEntregaTerrestreService {
  constructor(private http: HttpClient) { }

  guardar(dp: any): Observable<String> {
    return this.http.post<String>(`${environment.apiUrl}/plan-entrega-terrestre/agregar`, dp);
  }

  listar(): Observable<any> {
    return this.http.get<any[]>(`${environment.apiUrl}/plan-entrega-terrestre/listar`);
  }
}

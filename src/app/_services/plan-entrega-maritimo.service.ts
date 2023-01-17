import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PlanEntregaMaritimoService {
  constructor(private http: HttpClient) { }

  guardar(dp: any): Observable<String> {
    return this.http.post<String>(`${environment.apiUrl}/plan-entrega-maritimo/agregar`, dp);
  }

  listar(): Observable<any> {
    return this.http.get<any[]>(`${environment.apiUrl}/plan-entrega-maritimo/listar`);
  }
}

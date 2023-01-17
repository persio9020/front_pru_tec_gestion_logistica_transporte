import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class TiposProductoService {

  constructor(private http: HttpClient) { }

  guardar(dp: any): Observable<String> {
    return this.http.post<String>(`${environment.apiUrl}/tipo-producto/agregar`, dp);
  }

  listar(): Observable<any> {
    return this.http.get<any[]>(`${environment.apiUrl}/tipo-producto/listar`);
  }
}

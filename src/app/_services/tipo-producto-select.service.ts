import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SelectItem } from 'primeng/api';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TipoProductoSelectService {
  constructor(private http: HttpClient) { }

  listarOptions(): Observable<SelectItem[]> {
    return this.http.get<SelectItem[]>(`${environment.apiUrl}/tipo-producto/listar-options`);
  }
}

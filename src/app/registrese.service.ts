import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RegistreseService {
  constructor(private http: HttpClient) { }
  registro(dp: any) {
    return this.http.post<any>(`${environment.apiUrl}/registrese/guardar`, dp);
  }
}

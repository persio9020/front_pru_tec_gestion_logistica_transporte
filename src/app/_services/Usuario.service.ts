import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Mensaje } from '../_models/Mensaje';
@Injectable()
export class UsuarioService {
    constructor(private http: HttpClient) { }

    getById(id: number) {
        return this.http.get(`${environment.apiUrl}/usuariosAdministrador/encontrarPorId/` + id);
    }

    registro(usuario: any) {
        return this.http.post<Mensaje>(`${environment.apiUrl}/usuariosAdministrador/registrar`, usuario);
    }

    update(usuario: any) {
        return this.http.put(`${environment.apiUrl}/users/`/*+ user.id */, usuario);
    }

    delete(id: number) {
        return this.http.delete(`${environment.apiUrl}/users/` + id);
    }

}

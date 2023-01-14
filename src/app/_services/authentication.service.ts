import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { Mensaje } from '../_models/Mensaje';
@Injectable()
export class AuthenticationService {
    constructor(private http: HttpClient) { }

    login(lUsuario: any) {
        return this.http.post<any>(`${environment.apiUrl}/autenticacion/generar-datos-ingreso`, lUsuario)
            .pipe(map(user => {
                // login successful if there's a jwt token in the response
                if (user && user.token) {
                    window.sessionStorage.removeItem('usuarioActual');
                    window.sessionStorage.setItem('usuarioActual', JSON.stringify(user));
                }
                return user;
            }));
    }

    logout() {
        window.sessionStorage.removeItem('usuarioActual');
        window.sessionStorage.clear();
    }


    concederPermisoRecuperarContrasenia(llave: String) {
        return this.http.post<Mensaje>(`${environment.apiUrl}/autenticacion/conceder-permiso-recuperar-contrasenia`, llave);
    }
}
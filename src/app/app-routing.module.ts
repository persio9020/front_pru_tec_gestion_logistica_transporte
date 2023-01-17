import { RouterModule, Routes } from '@angular/router';
import { BodegasComponent } from './bodegas/bodegas.component';
import { DatosBasicosClienteComponent } from './datos-basicos-cliente/datos-basicos-cliente.component';
import { InicioComponent } from './inicio/inicio.component';
import { LoginComponent } from './login/login.component';
import { PlanesEntregaMaritimoComponent } from './planes-entrega-maritimo/planes-entrega-maritimo.component';
import { PlanesEntregaTerrestreComponent } from './planes-entrega-terrestre/planes-entrega-terrestre.component';
import { PuertoComponent } from './puerto/puerto.component';
import { RegistreseComponent } from './registrese/registrese.component';
import { TiposProductosComponent } from './tipos-productos/tipos-productos.component';
import { AuthGuard } from './_guards/auth.guard';

const routes: Routes = [
//  { path: '**', redirectTo: '' },
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  { path: 'registrese', component: RegistreseComponent },
  { path: 'datos-basicos-cliente', component: DatosBasicosClienteComponent, canActivate: [AuthGuard] },
  { path: 'tipos-productos', component: TiposProductosComponent, canActivate: [AuthGuard] },
  { path: 'bodegas', component: BodegasComponent, canActivate: [AuthGuard] },
  { path: 'puertos', component: PuertoComponent, canActivate: [AuthGuard] },
  { path: 'planes-entrega-terrestre', component: PlanesEntregaTerrestreComponent, canActivate: [AuthGuard] },
  { path: 'planes-entrega-maritimo', component: PlanesEntregaMaritimoComponent, canActivate: [AuthGuard] },
];
export const routing = RouterModule.forRoot(routes);
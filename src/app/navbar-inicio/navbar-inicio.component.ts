import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-navbar-inicio',
  templateUrl: './navbar-inicio.component.html',
  styleUrls: ['./navbar-inicio.component.sass']
})
export class NavbarInicioComponent {
  returnUrl: string="";
  constructor(
    private route: ActivatedRoute,
    private router: Router) {
      this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    }
  onSalir(){
    window.sessionStorage.removeItem('usuarioActual');
    this.router.navigate([this.returnUrl + '/']);
  }

}

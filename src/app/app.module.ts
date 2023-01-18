import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
//import { ErrorInterceptor, JwtInterceptor } from './_helpers';
import { CommonModule } from '@angular/common';
import { PlantillaComponent } from './plantilla/plantilla.component';
import { NavbarComponent } from './navbar/navbar.component';
import { TableModule } from 'primeng/table';
import { TooltipModule } from 'primeng/tooltip';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { FileUploadModule } from 'primeng/fileupload';
import { DataViewModule } from 'primeng/dataview';
import { DialogModule } from 'primeng/dialog';
import { PanelModule } from 'primeng/panel';
import { DropdownModule } from 'primeng/dropdown';
import { CalendarModule } from 'primeng/calendar';
import { PasswordModule } from 'primeng/password';
import { CardModule } from 'primeng/card';
import { ToastModule } from 'primeng/toast';
import { MessageModule } from 'primeng/message';
import { KeyFilterModule } from 'primeng/keyfilter';
import { RadioButtonModule } from 'primeng/radiobutton';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { AuthGuard } from './_guards';
import { AlertService } from './_services/alert.service';
import { AuthenticationService } from './_services/authentication.service';
import { AlertComponent } from './_directives';
import { InicioComponent } from './inicio/inicio.component';
import { routing } from './app-routing.module';
import { NavbarInicioComponent } from './navbar-inicio/navbar-inicio.component';
import { DatosBasicosClienteComponent } from './datos-basicos-cliente/datos-basicos-cliente.component';
import { TiposProductosComponent } from './tipos-productos/tipos-productos.component';
import { BodegasComponent } from './bodegas/bodegas.component';
import { PlanesEntregaTerrestreComponent } from './planes-entrega-terrestre/planes-entrega-terrestre.component';
import { PlanesEntregaMaritimoComponent } from './planes-entrega-maritimo/planes-entrega-maritimo.component';
import { ErrorInterceptor, JwtInterceptor } from './_helpers';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PuertoComponent } from './puerto/puerto.component';
import { RegistreseComponent } from './registrese/registrese.component';
@NgModule({//https://0a76-54-161-82-85.ngrok.io
  declarations: [
    AppComponent,
    PlantillaComponent,
    LoginComponent,
    NavbarComponent,
    AlertComponent,
    InicioComponent,
    NavbarInicioComponent,
    DatosBasicosClienteComponent,
    TiposProductosComponent,
    BodegasComponent,
    PlanesEntregaTerrestreComponent,
    PlanesEntregaMaritimoComponent,
    PuertoComponent,
    RegistreseComponent
  ],
  imports: [
    routing,
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    CommonModule,
    //primeng
    TableModule,
    TooltipModule,
    ButtonModule,
    InputTextModule,
    InputTextareaModule,
    FileUploadModule,
    DataViewModule,
    DialogModule,
    CardModule,
    ToastModule,
    PanelModule,
    CalendarModule,
    PasswordModule,
    BreadcrumbModule,
    DropdownModule,
    MessageModule,
    KeyFilterModule,
    RadioButtonModule,
    BrowserAnimationsModule
  ],
  providers: [
    AuthGuard,
    AlertService,
    AuthenticationService,
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

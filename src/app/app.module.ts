import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ErrorInterceptor, JwtInterceptor } from './_helpers';
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
import { RegistreseComponent } from './registrese/registrese.component';


@NgModule({
  declarations: [
    AppComponent,
    PlantillaComponent,
    LoginComponent,
    NavbarComponent,
    AlertComponent,
    RegistreseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
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
    RadioButtonModule
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

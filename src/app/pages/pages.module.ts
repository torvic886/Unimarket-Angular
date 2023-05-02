import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthModule } from '../auth/auth.module';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';

import { DashboardComponent } from './dashboard/dashboard.component';
import { ProductosComponent } from '../components/productos/productos.component';
import { UsuariosComponent } from '../components/usuarios/usuarios.component';
import { FormUsuarioComponent } from '../components/form-usuario/form-usuario.component';
import { PagesComponent } from './pages.component';



@NgModule({
  declarations: [
    DashboardComponent,
    ProductosComponent,
    UsuariosComponent,
    FormUsuarioComponent,
    PagesComponent
  ],
  exports: [
    DashboardComponent,
    ProductosComponent,
    UsuariosComponent,
    FormUsuarioComponent,
    PagesComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
    AuthModule
  ]
})
export class PagesModule { }

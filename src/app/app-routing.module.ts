import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { NopagefoundComponent } from './pages/nopagefound/nopagefound.component';
import { UsuariosComponent } from './components/usuarios/usuarios.component';
import { ProductosComponent } from './components/productos/productos.component';
import { FormUsuarioComponent } from './components/form-usuario/form-usuario.component';

import { FormsModule } from '@angular/forms';
import { PagesComponent } from './pages/pages.component';

const routes: Routes = [
    { 
      path: '', 
      component: PagesComponent,
      children : [
        { path: 'dashboard', component: DashboardComponent},
        { path: 'usuario', component: UsuariosComponent},
        { path: 'producto', component: ProductosComponent},
        { path: 'usuario/form', component: FormUsuarioComponent},
        { path: '', redirectTo: '/dashboard', pathMatch: 'full'},
      ]
    },
    { path: 'register', component: RegisterComponent},
    { path: 'login', component: LoginComponent},

    { path: '**', component: NopagefoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes),FormsModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }

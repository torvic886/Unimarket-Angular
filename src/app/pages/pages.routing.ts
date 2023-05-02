import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';


import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UsuariosComponent } from '../components/usuarios/usuarios.component';
import { ProductosComponent } from '../components/productos/productos.component';
import { FormUsuarioComponent } from '../components/form-usuario/form-usuario.component';

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

    //{ path: 'path/:routeParam', component: MyComponent },
    //{ path: 'staticPath', component: ... },
    //{ path: '**', component: ... },
    //{ path: 'oldPath', redirectTo: '/staticPath' },
    //{ path: ..., component: ..., data: { message: 'Custom' }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PagesRoutingModule {}

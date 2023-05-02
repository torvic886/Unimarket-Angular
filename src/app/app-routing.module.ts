import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//modulos
import { FormsModule } from '@angular/forms';
import { PagesRoutingModule } from './pages/pages.routing';
import { AuthRoutingModule } from './auth/auth.routing';

import { NopagefoundComponent } from './nopagefound/nopagefound.component';




const routes: Routes = [

    //path: '/Dashboard' pagesRouting
    //path: '/auth' AuthRoutingModule
    //path: '/medicos' MedicosRoutingModule
    //path: '/compras' ComprasRoutingModule
    { path: '', redirectTo: '/dashboard', pathMatch: 'full'},
    { path: '**', component: NopagefoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes),
    PagesRoutingModule,
    AuthRoutingModule,
    FormsModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

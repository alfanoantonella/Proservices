import {NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { RegistroComponent } from './pages/registro/registro.component';
import { PaginaInicioComponent } from './pagina-inicio/pagina-inicio.component';
import { PrestadorComponent } from './prestador/prestador.component';
import { ClienteComponent } from './cliente/cliente.component';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'registro', component: RegistroComponent},
  {path: 'pagina-inicio', component: PaginaInicioComponent},
  {path: 'prestador', component: PrestadorComponent},
  {path: 'cliente', component: ClienteComponent},
  {path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

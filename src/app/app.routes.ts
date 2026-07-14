import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { PrestamoComponent } from './components/formulario/formulario.component';
import { AboutComponent } from './components/about/about.component';

export const routes: Routes = [
  // Ruta por defecto: si entran a la raíz, manda al login
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  
  // Definición de las páginas del sistema
  { path: 'login', component: LoginComponent },
  { path: 'formulario', component: PrestamoComponent },
  { path: 'about', component: AboutComponent },
  
  // Ruta comodín: si escriben cualquier tontera en la URL, los manda al login
  { path: '**', redirectTo: 'login' }
];
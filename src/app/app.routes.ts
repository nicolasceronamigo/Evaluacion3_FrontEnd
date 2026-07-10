import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { FormularioComponent } from './components/formulario/formulario.component';
import { AboutComponent } from './components/about/about.component';

export const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'formulario', component: FormularioComponent },
  { path: 'about', component: AboutComponent }
];
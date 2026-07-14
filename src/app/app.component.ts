import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router'; // Para poder usar <router-outlet>
import { NavbarComponent } from './components/navbar/navbar.component'; // Para poder usar <app-navbar>

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent], // Registramos ambos componentes
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Evaluacion3_FrontEnd';
}
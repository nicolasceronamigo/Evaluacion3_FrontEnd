import { Component } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router'; // Importamos Router para poder redirigir al login

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive], // Permite usar los enlaces de navegación en el HTML
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  //variable que guarda el estado del menu desplegable
  menu_colapsado = true;
  // Recibimos el router en el constructor para usarlo en la redirección de abajo
  constructor(private router: Router) {}

  cerrarSesion() {
    // Borramos el estado de la sesión activa del localStorage
    localStorage.removeItem('sesion');
    // Redirigimos al usuario a la pantalla de login
    this.router.navigate(['/login']);
    //se recarga la página
    window.location.reload();
  }
}
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; // Importamos Router para poder redirigir al login

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent implements OnInit {

  // Recibimos el router en el constructor para poder usarlo abajo
  constructor(private router: Router) {}

  ngOnInit() {
    // Buscamos si existe la sesión en el localStorage
    const sesion = localStorage.getItem('sesion');

    // Si no existe, redirigimos al usuario al login automáticamente
    if (!sesion) {
      this.router.navigate(['/login']); 
    }
  }
}
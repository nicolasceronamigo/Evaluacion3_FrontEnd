import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; 
import { Router } from '@angular/router'; // 1. Importamos el Router de Angular

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule], 
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  usuario: string = '';
  contrasena: string = '';

  // 2. Inyectamos el servicio Router en el constructor para poder usarlo
  constructor(private router: Router) {}

  iniciarSesion() {
    if (this.usuario === 'admin' && this.contrasena === '1234') {
      // 3. Redirección real a la pantalla del formulario de Nicolás
      this.router.navigate(['/formulario']);
    } else {
      alert('Credenciales incorrectas. Intenta con admin / 1234');
    }
  }
}
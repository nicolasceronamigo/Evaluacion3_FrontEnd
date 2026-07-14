import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router'; // Se agrega RouterModule para el botón de redirección
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  // Almacena el nombre de usuario ingresado en el formulario
  usuario: string = '';
  
  // Almacena la contraseña ingresada en el formulario
  contrasena: string = '';
  
  // Almacena el mensaje de error para mostrar en la interfaz
  errorMessage: string = '';

  // Variable para mostrar o esconder el login leyendo el LocalStorage
  sesion_iniciada = localStorage.getItem('sesion');

  // Inicializa el enrutador de Angular para permitir la navegación
  constructor(private router: Router) {}

  // Valida las credenciales de acceso ingresadas por el usuario
  login() {
    if (this.usuario === 'admin' && this.contrasena === '1234') {
      // Guarda la "llave" de acceso en el navegador
      localStorage.setItem('sesion', this.usuario);
      
      // Limpia el mensaje si el ingreso es exitoso
      this.errorMessage = '';
      
      // Redirige al componente del formulario de préstamos
      this.router.navigate(['/formulario']);
    } else {
      // Define el texto de alerta si los datos son incorrectos
      this.errorMessage = 'Usuario o contraseña incorrectos. Por favor, intente nuevamente.';
    }
  }
}
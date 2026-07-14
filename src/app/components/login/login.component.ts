import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CommonModule],
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

  // Inicializa el enrutador de Angular para permitir la navegación
  constructor(private router: Router) {}

  // Valida las credenciales de acceso ingresadas por el usuario
  login() {
    if (this.usuario === 'admin' && this.contrasena === '1234') {
      // Limpia el mensaje si el ingreso es exitoso

      //"Llave" de acceso para los componentes protegidos (Formulario y About)
      localStorage.setItem ('sesion', 'activa');

      this.errorMessage = '';
      // Redirige al componente del formulario de préstamos
      this.router.navigate(['/formulario']);
    } else {
      // Define el texto de alerta seguro si los datos son incorrectos
      this.errorMessage = 'Usuario o contraseña incorrectos. Por favor, intente nuevamente.';
    }
  }
}
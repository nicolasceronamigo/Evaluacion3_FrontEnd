import { Component, OnInit } from '@angular/core'; // Agregamos OnInit para controlar el acceso al cargar
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router'; // Importamos Router para poder redirigir al login

@Component({
  selector: 'app-prestamo',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class PrestamoComponent implements OnInit { // Implementamos OnInit
  // Guarda valores ingresados en el formulario
  prestamo_ingresado = {
    nombre: '',
    libro: '',
    fecha: ''
  };
  
  // Guarda prestamo de localStorage
  prestamo_guardado: any = null;
  
  // Límites de fecha
  fechaMin: string;
  fechaMax: string;

  // Recibimos el router en el constructor para la redirección de seguridad
  constructor(private router: Router) {
    const fecha_actual = new Date();
    // Mínimo una semana
    const fecha_minima = new Date();
    fecha_minima.setDate(fecha_actual.getDate() + 7);
    // Máximo un mes
    const fecha_maxima = new Date();
    fecha_maxima.setMonth(fecha_actual.getMonth() + 1);
    // Deja las fechas en formato YYYY-MM-DD
    this.fechaMin = fecha_minima.toISOString().split('T')[0];
    this.fechaMax = fecha_maxima.toISOString().split('T')[0];
  }

  // Se ejecuta automáticamente apenas se entra a la página del formulario
  ngOnInit() {
    const sesion = localStorage.getItem('sesion');

    // Si no existe la sesión, redirige al usuario al login de inmediato
    if (!sesion) {
      this.router.navigate(['/login']);
    } else {
      // Si hay sesión activa, carga el préstamo si existía uno guardado
      this.buscar_prestamo();
    }
  }

  // Limpia el nombre quitando espacios vacíos
  limpiar_nombre(){
    this.prestamo_ingresado['nombre'] = this.prestamo_ingresado['nombre'].trim();
  }

  // Limpia el libro quitando espacios vacíos
  limpiar_libro(){
    this.prestamo_ingresado['libro'] = this.prestamo_ingresado['libro'].trim();
  }

  // Borra el préstamo guardado de la memoria del navegador y limpia la pantalla
  limpiarPrestamo() {
    localStorage.removeItem('prestamo');
    this.prestamo_guardado = null;
  }

  // Valida si la fecha ingresada es menor al mínimo permitido
  fechaMenorAlMinimo(){
    if (!this.prestamo_ingresado.fecha) {
      return false;
    }
    const fecha = new Date(this.prestamo_ingresado.fecha);
    const min = new Date(this.fechaMin);
    return fecha < min;
  }

  // Valida si la fecha ingresada es mayor al máximo permitido
  fechaMayorAlMaximo(): boolean {
    if (!this.prestamo_ingresado.fecha) {
      return false;
    }
    const fecha = new Date(this.prestamo_ingresado.fecha);
    const max = new Date(this.fechaMax);
    return fecha > max;
  }

  // Busca si existe algún préstamo registrado en el localStorage
  buscar_prestamo(){
    const datos_prestamo = localStorage.getItem("prestamo");
    if (datos_prestamo){
      this.prestamo_guardado = JSON.parse(datos_prestamo);
    } else {
      this.prestamo_guardado = null;
    }
  }

  // Registra el préstamo si pasa todas las validaciones
  registrarPrestamo(form: NgForm) {
    // Forzamos la limpieza de los campos de texto
    this.limpiar_nombre();
    this.limpiar_libro();

    // Evita guardar si el nombre o el libro quedaron vacíos tras la limpieza
    if (this.prestamo_ingresado.nombre === '' || this.prestamo_ingresado.libro === '') {
      return;
    }

    // Valida que la fecha se encuentre en el rango correspondiente
    if (this.fechaMenorAlMinimo() || this.fechaMayorAlMaximo()) {
      return;
    }

    // Guarda los datos en el localStorage
    localStorage.setItem("prestamo", JSON.stringify(this.prestamo_ingresado));
    
    // Actualiza la visualización y limpia los campos del formulario
    this.buscar_prestamo();
    form.resetForm();
  }
}
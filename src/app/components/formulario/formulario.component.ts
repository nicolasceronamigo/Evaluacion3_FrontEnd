import { Component } from '@angular/core'
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-prestamo',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class PrestamoComponent {
  //guarda valores ingresados en el formulario
  prestamo_ingresado = {
    nombre: '',
    libro: '',
    fecha: ''
  };
  //guarda prestamo de localStorage
  prestamo_guardado: any = null;
  //limites de fecha
  fechaMin: string;
  fechaMax: string;
  //limpiar nombre
  limpiar_nombre(){
    this.prestamo_ingresado['nombre'] = this.prestamo_ingresado['nombre'].trim()
  }
  //limpiar libro
  limpiar_libro(){
    this.prestamo_ingresado['libro'] = this.prestamo_ingresado['libro'].trim()
  }
  constructor() {
    const fecha_actual = new Date();
    // Mínimo una semana
    const fecha_minima = new Date();
    fecha_minima.setDate(fecha_actual.getDate() + 7);
    // Máximo un mes
    const fecha_maxima = new Date();
    fecha_maxima.setMonth(fecha_actual.getMonth() + 1);
    //Deja las fechas en formato YYYY-MM-DD
    this.fechaMin = fecha_minima.toISOString().split('T')[0];
    this.fechaMax = fecha_maxima.toISOString().split('T')[0];

    
  }

  fechaMenorAlMinimo(){
    //si no se ha ingresado nada
    if (!this.prestamo_ingresado.fecha) {
      return false;
    }
    //trae fecha ingresada y fecha mínima para compararlas
    const fecha = new Date(this.prestamo_ingresado.fecha);
    const min = new Date(this.fechaMin);
    return fecha < min;
  }

  fechaMayorAlMaximo(): boolean {
    //si no se ha ingresado nada
    if (!this.prestamo_ingresado.fecha) {
      return false;
    }
    //trae fecha ingresada y fecha máxima para compararlas
    const fecha = new Date(this.prestamo_ingresado.fecha);
    const max = new Date(this.fechaMax);
    return fecha > max;
  }

  buscar_prestamo(){
    const datos_prestamo = localStorage.getItem("prestamo")
    if (datos_prestamo){
      //si el prestamo esta en localStorage, se guarda en prestamo_guardado para poder mostrarlo 
      this.prestamo_guardado = JSON.parse(datos_prestamo)
    } else {
      //si no existe en localStorage, se cambia a null
    this.prestamo_guardado = null;
    }
  }

  registrarPrestamo(form: NgForm) {
    //se ejecuta cada vez que se apreta el boton de registrar prestamo
    if (this.fechaMenorAlMinimo() || this.fechaMayorAlMaximo()) {
      //verifica que la fecha esté en el rango permitido, en caso de que se escriba con numeros
      return;
    }
    //guarda en localStorage
    localStorage.setItem("prestamo", JSON.stringify(this.prestamo_ingresado));
    //busca el prestamo para ver si se guardo
    this.buscar_prestamo()
    //limpia el formulario
    form.resetForm();
  }
}


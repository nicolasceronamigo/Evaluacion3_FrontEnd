import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router'; // Esto es lo que le falta

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive], // Esto repara el error del HTML
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

}
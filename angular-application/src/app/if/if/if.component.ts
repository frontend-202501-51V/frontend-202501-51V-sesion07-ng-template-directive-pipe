import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-if',
  standalone: true,
  imports: [],
  templateUrl: './if.component.html',
  styleUrl: './if.component.scss'
})
export class IfComponent implements OnInit {
  isAuthenticated: boolean = true;

  // carrito
  cart = [
    {
      producto: 'televsion'
    }
  ];

  // variable extensa
  productoProximoAValidarEnTienda:any =  {
    juego: 'call of duty',
    cantidad: 2
  }

  edad = 20

  ngOnInit(): void {
    // al inicio debe mostrar cargando...
    this.cargando = true;
    // al inicializar el componente
    setTimeout(() => {
      this.datos = 'Informacion lista cargada desde API'
      this.cargando = false;
    }, 2000) // 2000 milisegundos = 2s
  }

  // carga de datos
  cargando = false;
  datos: string | null = null;


}

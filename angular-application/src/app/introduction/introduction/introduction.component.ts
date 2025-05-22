import { Component } from '@angular/core';

@Component({
  selector: 'app-introduction',
  templateUrl: './introduction.component.html',
  styleUrl: './introduction.component.scss'
})
export class IntroductionComponent {
  titulo  = 'mi nueva interpolacion'
  resultadoDeUnaSuma = 5 * 5;
  // si es verdadero se muestra, si es falso no
  seTieneQueOcultar = false;

  contador = 0

  // BINDINGS
  src= 'https://bs-uploads.toptal.io/blackfish-uploads/components/blog_post_page/4089168/cover_image/regular_1708x683/cover-REDESIGN-StepByStepAngular-Luke_Newsletter-ecd28c3cebab6bec800b478a95ca3bdb.png'


  // EVENT BINDING
  manejandoBoton() {
    console.log("se esta recibiendo el evento")
    // hagamos que se reduzca el contador en 1
    // this hace referencia a la instancia de la clase
    // this.contador = this.contador - 1;
    // metodo corto es:
    this.contador++;
  }

  nombre = 'miguel'
}

# Hints para Directivas Personalizadas

- Usa el decorador `@Directive` y define un selector único.
- Inyecta `ElementRef` y `Renderer2` en el constructor para manipular el DOM de forma segura.
- Usa `@HostListener('evento')` para reaccionar a eventos del host.
- Puedes modificar estilos con `renderer.setStyle(element, propiedad, valor)`.
- Recuerda declarar tu directiva en el módulo correspondiente para poder usarla.

Ejemplo de uso en template:

```html
<p appHighlight>Este texto se resalta al pasar el mouse.</p>
<p appColorOnClick>Haz clic para cambiar el color de este texto.</p>
```

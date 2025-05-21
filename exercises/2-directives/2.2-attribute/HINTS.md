# Hints para Directivas de Atributo

- Usa `[ngClass]="{ clase: condicion }"` para aplicar clases dinámicamente.
- Usa `[ngStyle]="{ propiedad: valor }"` para aplicar estilos en línea.
- Para una directiva personalizada, crea una clase con el decorador `@Directive` y usa `@HostListener` para reaccionar a eventos del DOM.
- Puedes combinar `[ngClass]` y `[ngStyle]` en el mismo elemento.
- Recuerda importar `FormsModule` para usar `[(ngModel)]` en inputs.

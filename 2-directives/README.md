# 2. Directivas en Angular

En este bloque aprenderás a utilizar y crear **directivas en Angular** para modificar el comportamiento y la apariencia de los elementos en el DOM.  
Explorarás directivas estructurales y de atributo, así como la creación de tus propias directivas personalizadas.

---

## 🎯 Objetivos

- Comprender qué es una directiva y su función en Angular.
- Diferenciar entre directivas estructurales y de atributo.
- Aplicar directivas integradas como `*ngIf`, `*ngFor`, `*ngSwitch`, `[ngClass]` y `[ngStyle]`.
- Crear directivas personalizadas para extender el comportamiento de los componentes.
- Identificar buenas prácticas y errores comunes al usar directivas.

---

## 📚 Teoría y ejemplos progresivos

### 1. ¿Qué es una directiva en Angular?

Una **directiva** es una clase que puede modificar el comportamiento, la estructura o el estilo de los elementos en el DOM.  
Angular ofrece directivas integradas y permite crear directivas personalizadas.

---

### 2. Directivas estructurales

Modifican la estructura del DOM (agregan o eliminan elementos).

- `*ngIf`: Muestra u oculta elementos según una condición.
- `*ngFor`: Repite un elemento para cada ítem de una colección.
- `*ngSwitch`: Muestra uno de varios bloques según el valor de una expresión.

**Ejemplo:**

```html
<div *ngIf="usuario">Bienvenido, {{ usuario.nombre }}</div>
<ul>
  <li *ngFor="let item of lista">{{ item }}</li>
</ul>
<div [ngSwitch]="color">
  <p *ngSwitchCase="'rojo'">Color rojo</p>
  <p *ngSwitchCase="'azul'">Color azul</p>
  <p *ngSwitchDefault>Otro color</p>
</div>
```

---

### 3. Directivas de atributo

Modifican la apariencia o el comportamiento de un elemento existente.

- `[ngClass]`: Aplica clases CSS dinámicamente.
- `[ngStyle]`: Aplica estilos en línea dinámicamente.

**Ejemplo:**

```html
<p [ngClass]="{ destacado: esDestacado }">Texto con clase dinámica</p>
<p [ngStyle]="{ color: colorTexto, fontWeight: 'bold' }">Texto con estilo dinámico</p>
```

---

### 4. Directivas personalizadas

Puedes crear tus propias directivas para reutilizar lógica o modificar el comportamiento de los elementos.

**Ejemplo básico:**

```typescript
// resaltar.directive.ts
import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appResaltar]'
})
export class ResaltarDirective {
  constructor(private el: ElementRef) {}

  @HostListener('mouseenter') onMouseEnter() {
    this.el.nativeElement.style.backgroundColor = 'yellow';
  }
  @HostListener('mouseleave') onMouseLeave() {
    this.el.nativeElement.style.backgroundColor = null;
  }
}
```

**Uso en template:**

```html
<p appResaltar>Texto resaltado al pasar el mouse</p>
```

---

### 5. Buenas prácticas y errores comunes

- Usa directivas estructurales solo para modificar la estructura del DOM.
- Prefiere `[ngClass]` y `[ngStyle]` para estilos dinámicos en lugar de manipular el DOM directamente.
- Nombra tus directivas personalizadas con prefijo para evitar conflictos.
- No abuses de la lógica compleja dentro de las directivas.

---

## 📂 Archivos de apoyo

- [`directives-examples.component.ts`](directives-examples.component.ts) – Ejemplos prácticos de directivas.
- [`resaltar.directive.ts`](resaltar.directive.ts) – Ejemplo de directiva personalizada.

---

## ✅ Resumen

- Las directivas permiten modificar la estructura, apariencia o comportamiento de los elementos en Angular.
- Usa directivas estructurales para agregar o quitar elementos del DOM.
- Usa directivas de atributo para modificar estilos o clases dinámicamente.
- Crea directivas personalizadas para reutilizar lógica y extender el comportamiento de tus componentes.

## Preguntas Conceptuales: Directivas

1. ¿Cuál es la diferencia entre una directiva estructural y una de atributo?
2. ¿Cómo aplicarías una clase CSS solo si una condición es verdadera?
3. ¿Para qué sirve el decorador `@Directive`?
4. ¿Qué sucede si usas varias directivas en un mismo elemento?
5. ¿Cómo reutilizarías lógica de interacción en varios elementos del template?

## Hints para Directivas

- Usa `*ngIf`, `*ngFor` y `*ngSwitch` para controlar la estructura del DOM.
- Usa `[ngClass]` y `[ngStyle]` para aplicar estilos y clases dinámicamente.
- Las directivas personalizadas te permiten encapsular y reutilizar lógica de presentación o interacción.
- Recuerda registrar tus directivas personalizadas en el módulo correspondiente.

---

**Practica modificando estos ejemplos y crea tus propias variantes para dominar las directivas en Angular. Usa este archivo como plantilla para otros temas y construye tu propio repositorio de aprendizaje incremental.**

# 2.3 Directivas Personalizadas en Angular

En este ejercicio aprenderás a crear tus propias directivas de atributo para reutilizar lógica y extender el comportamiento de los elementos en Angular.

## 🎯 Objetivos

- Comprender el propósito de las directivas personalizadas.
- Crear una directiva de atributo personalizada.
- Aplicar la directiva en un componente y observar su efecto.

## 📖 Teoría breve

Las **directivas personalizadas** permiten encapsular y reutilizar lógica que modifica la apariencia o el comportamiento de los elementos del DOM. Se crean usando el decorador `@Directive`.

Ejemplo básico:

```typescript
@Directive({
  selector: '[appMiDirectiva]'
})
export class MiDirectiva { }
```

Puedes usar `@HostListener` para reaccionar a eventos y `@HostBinding` para modificar propiedades del host.

## 📝 Actividades

1. **Explora el archivo `highlight.directive.ts`**  
   Observa cómo se implementa una directiva que resalta el fondo de un elemento al pasar el mouse.

2. **Crea una directiva personalizada que cambie el color del texto al hacer clic.**

3. **Aplica tu directiva en el componente de ejemplo y prueba su funcionamiento.**

4. **Responde las preguntas del archivo [`QUIZ.md`](QUIZ.md).**

## 📂 Archivos de apoyo

- [`highlight.directive.ts`](highlight.directive.ts) – Ejemplo de directiva personalizada.
- [`start.directive.ts`](start.directive.ts) – Archivo para tu propia directiva.
- [`HINTS.md`](HINTS.md) – Guía para implementación.
- [`QUIZ.md`](QUIZ.md) – Preguntas conceptuales.

---

¡Explora el ejemplo, crea tu propia directiva y experimenta con el poder de Angular!
